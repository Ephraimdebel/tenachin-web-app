// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
import partners from "../../data/partner.json"


const Partner = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

  return (
    <section id="partner" className="partner section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Partner With Us – Let’s Build the Future of Care</h2>
        <p>
          We collaborate with governments, NGOs, academic institutions, and tech innovators
          to build scalable, digitally-enabled health systems.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {partners.map((item, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="partner-item">
                <div className="icon">
                  <i
                    className={`bi ${item.icon}`}
                    style={{ color: item.color }}
                  ></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
