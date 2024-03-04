import { Component } from '@angular/core';
import { Services } from '../components/services/service';
import { About } from '../components/about/about';
import { Cta } from '../components/cta';
import { Hero } from '../components/hero';
import { WhyUs } from '../components/why-us';
import { Testimonials } from '../components/testimonials/testimonials';

@Component({
  selector: 'adam-home',
  standalone: true,
  imports: [Hero, Cta, Services, About, WhyUs, Testimonials],
  template: `
  <main id="main">
    <adam-hero />
    <adam-about />
    <adam-whyus />
    <adam-cta />
    <adam-services />
    <adam-testimonials />
</main>
  `,
  styles: '',
})
export class Home {}
