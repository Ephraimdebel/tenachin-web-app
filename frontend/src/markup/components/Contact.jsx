import React from "react";
import contactInfo from "../../data/contactInfo.json";
import socialLinks from "../../data/socialLinks.json";

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </div>

      <div className="container" data-aos="fade" data-aos-delay="100">
        <div className="row gy-4">
          {/* Contact Info Items */}
          {contactInfo.map((item, index) => (
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
              key={index}
            >
              <i className={`${item.icon} flex-shrink-0`}></i>
              <div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}

          {/* Social Media */}
          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="700">
            <i className="bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Social Media</h3>
              <ul
                className="list-unstyled mb-0"
                style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
              >
                {socialLinks.map((social, index) => (
                  <li key={index} style={{ marginRight: "20px" }}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-2"
                    >
                      <i className={social.icon}></i> {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Terms & Conditions Button */}
          <div className="info-item d-flex" style={{ border: "none", paddingTop: 0 }}>
            <button
              type="button"
              className="btn btn-link p-0"
              data-bs-toggle="modal"
              data-bs-target="#termsModal"
              style={{ fontSize: "1rem", textDecoration: "underline" }}
            >
              Terms and Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Terms and Policies Modal */}
      <div
        className="modal fade"
        id="termsModal"
        tabIndex="-1"
        aria-labelledby="termsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="termsModalLabel">
                Terms and Policies | Tenachin Telehealth Center
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body"
              style={{ maxHeight: "60vh", overflowY: "auto" }}
            >
              {/* You can move this text into a separate JSON file if you want */}
              <p>
                Welcome to Tenachin Telehealth. By using our website or mobile
                applications, you agree to comply with the following Terms and
                Policies...
              </p>
              {/* Full Terms content can stay here or be imported if needed */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
