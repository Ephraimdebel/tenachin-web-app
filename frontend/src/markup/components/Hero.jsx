import React, { useEffect } from "react";
import { publicAxios } from "../../utils/axios/publicAxiosInstance";

const Hero = () => {
  // State variables to hold hero section data
  const [title, setTitle] = React.useState(""); // Title state
  const [descriptionOne, setDescriptionOne] = React.useState(""); // First description state
  const [descriptionTwo, setDescriptionTwo] = React.useState(""); // Second description state

  useEffect(() => {
    // Fetch hero section data from backend
    const fetchHeroData = async () => {
      try {
        const response = await publicAxios.get("/herosection");
        const data = response.data[0];
        // Set state values for the hero content
        setTitle(data?.title);
        setDescriptionOne(data?.description_one);
        setDescriptionTwo(data?.description_two);
      } catch (error) {
        console.error("Error fetching hero section data:", error);
      }
    };

    // Call the fetch function
    fetchHeroData();
  }, []);


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
              {/* Original Static Text (preserved)
              Born from deep experience and firsthand understanding of Africa’s
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
              {/* Original static text (preserved)
              From emergency care to lifestyle coaching, from tele-ICU to mental
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

        {/* <!-- Slide 3 (Preserved but commented) --> */}
        {/* 
        <div className="carousel-item">
          <div className="carousel-container">
            <h2 className="animate__animated animate__fadeInDown">
              Welcome to <span>Tenachin Telehealth</span>
            </h2>
            <p className="animate__animated animate__fadeInUp">
              Launched in Ethiopia. Built for Africa.24/7. In your language. On your terms.
              This is the future of care. Welcome to Tenachin.
            </p>
            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">
              Read More
            </a>
          </div>
        </div>
        */}

        {/* Bootstrap Carousel Controls */}
        {/* Updated: changed href → data-bs-target so React works properly */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          ></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          ></span>
        </button>
      </div>

      {/* Background SVG Waves */}
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
