import React from 'react'

const ServiceCard = ({ icon_class, color, title, description, delay }) => (
  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={delay}>
    <div className="service-item position-relative">
      <div className="icon">
        <i className={icon_class} style={{ color }}></i>
      </div>
      <a href="#" className="stretched-link">
        <h3>{title}</h3>
      </a>
      <p>{description}</p>
    </div>
  </div>
);

export default ServiceCard