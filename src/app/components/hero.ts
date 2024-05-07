import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'adam-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
      <div
        class="container text-center position-relative"
        data-aos="fade-in"
        data-aos-delay="200"
      >
        <h1>Adams Primary Care.</h1>
        <h2>We specialize in Family medicine and General Medicine.</h2>
        <a routerLink="/" fragment="about" class="btn-get-started scrollto"
          >Get Started</a
        >
      </div>
    </section>
    <!-- End Hero -->
  `,
})
export class Hero {}
