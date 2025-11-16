import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "W/o Almaz, 23, Gojam",
    title: "Urogynecology Surgery Patient",
    stars: 5,
    quote:
      "After my pelvic surgery in Addis Ababa, Tenachin helped me stay in touch with my surgeon and nurses from home. They monitored my wound, pain, vital signs, and even reminded me about pelvic floor therapy. I felt supported every step of the way—without having to travel back and forth during a time of road conflict and insecurity. It saved me from risking dangerous trips and helped my family avoid losing workdays. Tenachin brought hospital-level follow-up to my home, safely and with dignity.",
  },
  {
    name: "W/rt . Hilina",
    title: "Nurse Anesthetist, Addis Ababa",
    stars: 5,
    quote:
      "Tenachin has changed the game for us. We use its perioperative checklists, real-time ICU guidance, and live video consults with senior anesthesiologists. It’s like having a world-class perioperative team in your pocket. With their help, we’ve managed to stabilize and rescue several high-risk surgical patients who would’ve otherwise had poor outcomes. It gives me confidence, it strengthens teamwork, and most of all—it saves lives.",
  },
  {
    name: "W/ro KIDIJA, 47, Adama",
    title: "Cardiac & Chronic Back Pain Management",
    stars: 5,
    quote:
      "After my heart condition was diagnosed and I started getting severe back pain from long-standing stress and limited mobility, Tenachin became my lifeline. Their cardiologist guided my treatment plan while their pain management team helped me manage my back pain with targeted advice, safe medications, and posture therapy—all from a distance. I didn’t have to travel far or wait in line. I could ask questions through the app, get reminders for my heart medications, and even receive daily wellness tips. I felt supported, cared for, and treated with humanity—not just as a patient, but as a whole person. Tenachin brought healing into my home, and into my life.",
  },
  {
    name: "Ato. Tesfaye, 38, Assossa",
    title: "Pediatric Surgery Referral",
    stars: 5,
    quote:
      "My son had frequent stomach pain that worried us for months. We didn’t know which doctor to see or if it was serious. Through Tenachin, we got connected to a pediatric surgeon quickly. After thorough evaluation, surgery was recommended and done safely. Now, my son is healthy and happy again. Tenachin made all the difference—they guided us every step, helped us avoid delays, and gave us hope when we were scared.",
  },
  {
    name: "Dr. Finot, OB/GYN",
    title: "Urogynecology Subspecialist",
    stars: 5,
    quote:
      "Through Tenachin, I consult rural clinics, counsel patients, and provide postoperative support. Patients with prolapse or incontinence finally get discreet, dignified care—even from afar.",
  },
  {
    name: "Nurse Abdela",
    title: "ICU Nurse, Afar",
    stars: 5,
    quote:
      "A 20-year-old man was brought to our facility after a severe road traffic accident. He needed emergency intubation and advanced ICU care, but we were short on resources and specialist support. Through Tenachin, I immediately connected with an expert anesthesiologist and ICU specialist. They guided me step-by-step—from intubation, sedation, to ventilation settings and hemodynamic support. The young man survived and recovered. Tenachin was like having a full critical care team in my hands, even in remote Afar. It saved a life.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What they are saying about us</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 40 },
            1200: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="testimonial-item">
                <h3>{t.name}</h3>
                <h4>{t.title}</h4>
                <div className="stars">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{t.quote}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
