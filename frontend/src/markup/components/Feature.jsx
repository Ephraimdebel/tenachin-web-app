import React, { useState } from "react";
import image1 from "../../assets/template_asset/img/working-1.jpg";
import image2 from "../../assets/template_asset/img/working-2.jpg";
import image3 from "../../assets/template_asset/img/working-3.jpg";
import image4 from "../../assets/template_asset/img/working-4.jpg";

const tabs = [
  {
    id: 1,
    title: "Mission",
    icon: "bi bi-binoculars",
    content:
      "To provide safe, affordable, and expert-led healthcare for all—by harnessing digital innovation that is locally grounded, culturally appropriate, and scalable across low-resource settings.",
    image: image1,
  },
  {
    id: 2,
    title: "Vision",
    icon: "bi bi-box-seam",
    content:
      "A continent where no life is lost due to distance, poverty, or lack of a health worker—by building a future where quality care reaches every person, everywhere.",
    image: image2,
  },
  {
    id: 3,
    title: "Core Values",
    icon: "bi bi-brightness-high",
    content:
      "To provide safe, affordable, and expert-led healthcare for all—by harnessing digital innovation that is locally grounded, culturally appropriate, and scalable across low-resource settings.",
    list: [
      "Equity – We prioritize the underserved, ensuring care is accessible regardless of geography, income, or language.",
      "Innovation – We use technology not for its novelty, but for solving real-world healthcare barriers.",
      "Ethics – We uphold patient dignity, confidentiality, and clinical excellence in every interaction.",
      "Empowerment – We train and support frontline workers and patients to take control of their health.",
      "Impact – We measure success not by downloads, but by lives improved, systems strengthened, and communities served.",
    ],
    image: image3,
  },
  {
    id: 4,
    title: "Why we are different",
    icon: "bi bi-command",
    content:
      "Tenachin is the first full-spectrum, multilingual telehealth platform tailored to Sub-Saharan Africa. Designed by Ethiopian doctors and public health leaders, it delivers safe, affordable, and high-quality care—anytime, anywhere. Our services are culturally adapted, patient-centered, and accessible via app, phone, or SMS. Backed by renowned specialists, we offer compassionate, respectful, and accurate care across all settings. Tenachin breaks barriers of distance, cost, and language while integrating with existing health systems. With a deep understanding of Africa’s healthcare realities, we ensure efficiency, trust, and sustainable impact—bringing expert-led digital care to communities that need it most.",
    image: image4,
  },
];

const Feature = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id="features" className="features section">
      <div className="container">
        {/* Tabs */}
        <ul className="nav nav-tabs row d-flex" data-aos="fade-up" data-aos-delay="100">
          {tabs.map((tab) => (
            <li key={tab.id} className="nav-item col-3">
              <a
                className={`nav-link ${activeTab === tab.id ? "active show" : ""}`}
                onClick={() => setActiveTab(tab.id)}
                href="#!"
              >
                <i className={tab.icon}></i>
                <h4 className="d-none d-lg-block">{tab.title}</h4>
              </a>
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane fade ${activeTab === tab.id ? "active show" : ""}`}
            >
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <p>{tab.content}</p>
                  {tab.list && (
                    <ul>
                      {tab.list.map((item, index) => (
                        <li key={index}>
                          <i className="bi bi-check2-all"></i> <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={tab.image} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
