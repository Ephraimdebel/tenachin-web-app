import React, { useEffect } from "react";
import Header from "../components/Header";

// import "https://fonts.googleapis.com"
// import "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
// import "https://fonts.gstatic.com"



import "../../assets/template_asset/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/template_asset/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../assets/template_asset/vendor/aos/aos.css"
import "../../assets/template_asset/vendor/animate.css/animate.min.css"

import "../../assets/template_asset/vendor/glightbox/css/glightbox.min.css"
import "../../assets/template_asset/vendor/swiper/swiper-bundle.min.css"
import "../../assets/template_asset/css/main.css";
// at top of index.js / main.jsx
import '../../assets/template_asset/vendor/bootstrap/js/bootstrap.bundle.min.js';


import Hero from "../components/Hero";
import About from "../components/About";
import Feature from "../components/Feature";
import AOS from "aos";
import "aos/dist/aos.css";
import CallToAction from "../components/CallToAction";
import Service from "../components/Service";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ClinicalTeam from "../components/ClinicalTeam";
import Partner from "../components/Partner";
import Contact from "../components/Contact";


const Home = () => {

   useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration
      once: true,       // animation happens once
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Feature />
      <CallToAction />
      <Service />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <ClinicalTeam />
      <Partner />
      <Contact />
    </>
  );
};

export default Home;
