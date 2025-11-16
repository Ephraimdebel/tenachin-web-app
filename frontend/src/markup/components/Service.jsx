import React from "react";
import ServiceCard from "./ServiceCard";

// Services Section
const Service = () => {
  const services = [
    {
      icon: "bi bi-cash-stack",
      color: "#0dcaf0",
      title: "General & Specialist Consultations",
      description: "Diagnosis, follow-up, and second opinions across medical fields",
      delay: 100,
    },
    {
      icon: "bi bi-calendar4-week",
      color: "#fd7e14",
      title: "Mental Health & Counseling",
      description: "Psychiatric care, emotional support, marriage & addiction counseling",
      delay: 200,
    },
    {
      icon: "bi bi-chat-text",
      color: "#20c997",
      title: "Emergency & Tele-ICU Services",
      description: "Real-time triage, critical care, and provider support",
      delay: 300,
    },
    {
      icon: "bi bi-credit-card-2-front",
      color: "#df1529",
      title: "Pre- & Postoperative Care",
      description: "Surgical risk evaluation and recovery monitoring",
      delay: 400,
    },
    {
      icon: "bi bi-globe",
      color: "#6610f2",
      title: "Tele-Lab & ePrescriptions",
      description: "Digital labs, medication orders, and refill support",
      delay: 500,
    },
    {
      icon: "bi bi-clock",
      color: "#f3268c",
      title: "Chronic Disease Management",
      description: "Follow-up for diabetes, hypertension, asthma, HIV, etc.",
      delay: 600,
    },
    {
      icon: "bi bi-heart-pulse",
      color: "#6f42c1",
      title: "Palliative & Elderly Care",
      description: "End-of-life, cancer, and aging support at home",
      delay: 700,
    },
    {
      icon: "bi bi-apple",
      color: "#28a745",
      title: "Lifestyle Medicine & Nutrition",
      description: "Diet, exercise, weight loss, and smoking cessation",
      delay: 800,
    },
    {
      icon: "bi bi-telephone",
      color: "#007bff",
      title: "Hotline & SMS Services",
      description: "Health triage, reminders, and advice via SMS or call",
      delay: 900,
    },
    {
      icon: "bi bi-pregnant",
      color: "#fdc107",
      title: "Maternal & Child Health",
      description: "ANC, PNC, immunization tracking, and newborn care",
      delay: 1000,
    },
    {
      icon: "bi bi-person-bounding-box",
      color: "#e83e8c",
      title: "Adolescent & Youth Health",
      description: "Reproductive health, mental health, and peer education",
      delay: 1100,
    },
    {
      icon: "bi bi-brain",
      color: "#20c997",
      title: "Health Education & Coaching",
      description: "Disease awareness and preventive health education",
      delay: 1200,
    },
    {
      icon: "bi bi-building",
      color: "#6610f2",
      title: "Public Health Campaigns",
      description: "Vaccination, nutrition, school health, and emergency outreach",
      delay: 1300,
    },
    {
      icon: "bi bi-mortarboard",
      color: "#17a2b8",
      title: "Digital Training for Providers",
      description: "CPD courses, telemedicine skills, and virtual simulation",
      delay: 1400,
    },
    {
      icon: "bi bi-bar-chart-line",
      color: "#dc3545",
      title: "Remote Monitoring Tools",
      description: "Vitals tracking, wearables, and AI-assisted triage",
      delay: 1500,
    },
    {
      icon: "bi bi-diagram-3",
      color: "#343a40",
      title: "Data & System Integration",
      description: "EMR linking, insurance, surveillance, and referral support",
      delay: 1600,
    },
  ];

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>What we do offer</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
