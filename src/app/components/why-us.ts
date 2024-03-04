import { Component } from '@angular/core';

@Component({
  selector: 'adam-whyus',
  standalone: true,
  template: `
    <!-- ======= Why Us Section ======= -->
    <section id="why-us" class="why-us">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 d-flex align-items-stretch"
            data-aos="fade-right"
          >
            <div class="content">
              <h3>Why Choose Us?</h3>
              <p>
               At Adams Primary Care, we treat every patient with compassion, respect, and empathy, ensuring that you feel heard, valued, and supported throughout your healthcare journey.
               <br />
               <br />
               Our modern facilities are equipped with the latest technology and resources to provide you with exceptional care in a comfortable and welcoming environment.
              </p>
              <div class="text-center">
                <a href="#services" class="more-btn"
                  >Learn More <i class="bx bx-chevron-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-lg-8 d-flex align-items-stretch">
            <div class="icon-boxes d-flex flex-column justify-content-center">
              <div class="row">
                <div
                  class="col-xl-4 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-receipt"></i>
                    <h4>Experienced Professionals</h4>
                    <p>
                    Our experienced healthcare specialists bring a wealth of knowledge and expertise in primary care, family medicine, and nursing, ensuring you receive top-notch care.
                    </p>
                  </div>
                </div>
                <div
                  class="col-xl-4 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-cube-alt"></i>
                    <h4>Patient-Centered Approach</h4>
                    <p>
                     Your needs come first. Benefit from a personalized healthcare experience tailored to your unique needs, goals, and concerns.
                    </p>
                  </div>
                </div>
                <div
                  class="col-xl-4 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-images"></i>
                    <h4> Comprehensive Services</h4>
                    <p>
                 From preventive care to specialized treatments, access a wide range of services under one roof, ensuring all your healthcare needs are met efficiently.


                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- End .content-->
          </div>
        </div>
      </div>
    </section>
    <!-- End Why Us Section -->
  `,
  styles: ``,
})
export class WhyUs {}
