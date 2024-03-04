import { Component, signal } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'adam-testimonials',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  sliderConfig = {
    dots: true,
    draggable: true,
    infinite: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  testimonials = signal<TestimonialDto[]>([
    {
      Id: 'aie0qfhakdlfak87ofakf',
      name: 'Sarah Lawson',
      occupation: 'Marketing Executive.',
      message:
        'As a long-time patient, I continue to be impressed by the level of professionalism and expertise at Adams Primary Care. They consistently deliver outstanding healthcare services with a personal touch.',
    },
    {
      Id: 'aie0qfkfls-r3-r30f',
      name: 'Jennifer Barnes',
      occupation: ' Graphic Designer',
      message:
        'The team at Adams Primary Care is amazing! They are always friendly, caring, and attentive to my needs. I feel confident knowing that I am in good hands whenever I visit.',
    },
    {
      Id: 'aie0qf504-3084-7ofakf',
      name: 'Michael Nguyen',
      occupation: ' Software Engineer',
      message:
        "I've been a patient at Adams Primary Care for years, and I couldn't be happier with the level of care I receive. The doctors and staff truly go above and beyond to make sure I am well taken care of.",
    },
    {
      Id: 'aie09ew-fiwewefl-7ofakf',
      name: 'Emily Parker',
      occupation: 'Human Resources Manager',
      message:
        'I highly recommend Adams Primary Care to anyone in need of quality healthcare services. The staff is professional, knowledgeable, and genuinely cares about the well-being of their patients.',
    },
  ]);
}


export interface TestimonialDto{
  Id: string;
  name: string;
  occupation: string;
  message: string;
}