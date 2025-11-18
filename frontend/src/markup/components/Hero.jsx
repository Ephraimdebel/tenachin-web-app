import React from "react";
import { useEffect } from "react";
import axion from "axios";
const Hero = () => {
  const [title, setTitle] = React.useState("");
  const [descriptionOne, setDescriptionOne] = React.useState("");
  const [descriptionTwo, setDescriptionTwo] = React.useState("");
  useEffect(() => {
   const fetchHeroData = async () => {
      try {
        const response = await axion.get('http://localhost:5000/api/herosection');
        const data = response.data[0];
        setTitle(data.title);
        setDescriptionOne(data.description_one);
        setDescriptionTwo(data.description_two);
      } catch (error) {
        console.error('Error fetching hero section data:', error);
      }
    };
    fetchHeroData();
  }, []);
  console.log(title,descriptionOne,descriptionTwo)
  return (
    <section id="hero" className="hero section dark-background">
      <div
        id="hero-carousel"
        data-bs-interval="5000"
        className="container carousel carousel-fade"
        data-bs-ride="carousel"
      >
        {/* <!-- Slide 1 --> */}
        <div className="carousel-item active">
          <div className="carousel-container">
            <h2 className="animate__animated animate__fadeInDown">
              {/* {Welcome to <span>Tenachin Telehealth</span>} */}
              {title}
            </h2>
            <p className="animate__animated animate__fadeInUp">
              {/* Born from deep experience and firsthand understanding of Africa’s
              healthcare challenges, Tenachin is not just another platform—it’s
              a revolution. We are Africa’s first multilingual, full-spectrum
              telehealth ecosystem, built by doctors, engineers, and global
              experts after years of meticulous observation and frontline
              service. */}
              {descriptionOne}
            </p>
            <a
              href="#about"
              className="btn-get-started animate__animated animate__fadeInUp scrollto"
            >
              Read More
            </a>
          </div>
        </div>

        {/* <!-- Slide 2 --> */}
        <div className="carousel-item">
          <div className="carousel-container">
            <h2 className="animate__animated animate__fadeInDown">
              {/* Welcome to <span>Tenachin Telehealth</span> */}
              {title}
            </h2>
            <p className="animate__animated animate__fadeInUp">
              {/* From emergency care to lifestyle coaching, from tele-ICU to mental
              health, from prescription to prevention—we deliver world-class,
              multi-specialty care led by a trusted team of renowned physicians
              and subspecialists.
              */}
              {descriptionTwo}
            </p>
            <a
              href="#about"
              className="btn-get-started animate__animated animate__fadeInUp scrollto"
            >
              Read More
            </a>
          </div>
        </div>

        {/* <!-- Slide 3 --> */}
        {/* <!-- <div className="carousel-item">
          <div className="carousel-container">
            <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Tenachin Telehealth</span></h2>
            <p className="animate__animated animate__fadeInUp">Launched in Ethiopia. Built for Africa.24/7. In your language. On your terms.This is the future of care. Welcome to Tenachin.
</p>
            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
          </div>
        </div> --> */}

        <a
          className="carousel-control-prev"
          href="#hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          ></span>
        </a>

        <a
          className="carousel-control-next"
          href="#hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          ></span>
        </a>
      </div>

      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>

        <g className="wave1">
          <use href="#wave-path" x="50" y="3" />
        </g>

        <g className="wave2">
          <use href="#wave-path" x="50" y="0" />
        </g>

        <g className="wave3">
          <use href="#wave-path" x="50" y="9" />
        </g>
      </svg>
    </section>
  );
};

export default Hero;
