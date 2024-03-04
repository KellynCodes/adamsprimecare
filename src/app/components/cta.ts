import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'adam-cta',
  standalone: true,
imports: [RouterLink],
  template: `
    <!-- ======= Cta Section ======= -->
    <section id="cta" class="cta">
      <div class="container">
        <div class="text-center" data-aos="zoom-in">
          <h3>Adams Primary Care</h3>
          <p>Ready to experience exceptional healthcare? Schedule an appointment with Adams Primary Care today and take the first step towards better health and wellness. Contact us now to book your appointment or learn more about our services. Your health is our priority!
          </p>
          <a class="cta-btn" routerLink="/contact">Contact Us</a>
        </div>
      </div>
    </section>
    <!-- End Cta Section -->
  `,
  styles: ``,
})
export class Cta {}
