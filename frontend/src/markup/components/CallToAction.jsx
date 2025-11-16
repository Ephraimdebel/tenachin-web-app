import React from "react";

const CallToAction = () => {
  return (
    <section id="call-to-action" className="call-to-action section dark-background">
      <div className="container">
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-9 text-center text-xl-start">
            <h3>Download Tenachin</h3>
            <p>
              Tenachin is the first full-spectrum telehealth platform tailored
              to Sub-Saharan Africa. Designed by Ethiopian doctors and public
              health leaders, it delivers safe, affordable, and high-quality
              care—anytime, anywhere. Our services are culturally adapted,
              patient-centered, and accessible via app, phone, or SMS. Backed by
              renowned specialists, we offer compassionate, respectful, and
              accurate care across all settings. Tenachin breaks barriers of
              distance, cost, and language while integrating with existing
              health systems. With a deep understanding of Africa’s healthcare
              realities, we ensure efficiency, trust, and sustainable
              impact—bringing expert-led digital care to communities that need
              it most.
            </p>
          </div>
          <div className="col-xl-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#">
              Download Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
