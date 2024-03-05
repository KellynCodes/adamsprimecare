import { HttpStatusCode } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailJs from '@emailjs/browser';

@Component({
  selector: 'adam-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './contact.html',
  styles: `.contact{
    margin-top: 5rem;
  }`,
})
export class Contact {
  public contactForm: FormGroup;
  public isSending = signal<boolean>(false);

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^\\+(?:[0-9] ?){6,14}[0-9]$')]],
      date: [new Date().toDateString(), Validators.required],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10000),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  async onSubmit(): Promise<void> {
    if (!this.contactForm.valid) {
      this.toastr.error('Please fill all the fields');
      return;
    }
    try {
      this.isSending.set(true);
      const response = await emailJs.send(
        'service_oya6r0g',
        'template_232x2t3',
        {
          to_name: 'Adams Primary Care.',
          ...this.contactForm.value,
        },
        'cuPw9ojL2RTSlbEgt'
      );
      if (response.status != HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.toastr.error(
          'Something unexpected happened while sending the message.Please try again.'
        );
        return;
      }
      if (response.status == HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.toastr.success(
          `I have received your message ${this.contactForm.value.name}. Will be in-touch with you shortly.`
        );
        this.contactForm.reset({
          date: new Date().toDateString(),
        });
        return;
      }
    } catch (error: any) {
      if (error?.status != HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.toastr.error('Message not sent. Try again.');
        return;
      }
    }
  }
}
