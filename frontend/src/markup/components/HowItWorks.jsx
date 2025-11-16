import React from "react";
import StepCard from "./StepCard";


const HowItWorks = () => {
  const steps = [
    {
      icon: "🔹",
      title: "Step 1: Get Started",
      list: [
        "Mobile App (iOS/Android) for full access",
        "Call Center for voice-based help",
        "SMS Gateway for low-tech users",
      ],
      delay: 100,
    },
    {
      icon: "🔹",
      title: "Step 2: Share Your Concern",
      description:
        "Briefly describe your symptoms, condition, or upload a referral if available. You can also request a specific specialist or service.",
      delay: 200,
    },
    {
      icon: "🔹",
      title: "Step 3: Get Connected",
      description:
        "You’ll be matched with a certified general practitioner or specialist/subspecialist within minutes—either by video, voice call, or text depending on your access and preference.",
      delay: 300,
    },
    {
      icon: "🔹",
      title: "Step 4: Receive Care",
      list: [
        "Digital prescription",
        "Lab request (if needed)",
        "Follow-up instructions or referral",
      ],
      delay: 400,
    },
    {
      icon: "🔹",
      title: "Step 5: Make Payment",
      list: [
        "Mobile money",
        "Health insurance",
        "Voucher or partner coverage (for supported users)",
      ],
      delay: 500,
    },
    {
      icon: "⏱",
      title: "Response Time Guarantee",
      list: [
        "Emergencies: Under 10 minutes",
        "General cases: Within 30 minutes",
      ],
      delay: 600,
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works section">
      <div className="container section-title" data-aos="fade-up">
        <h2>How It Works – Simple, Fast, Inclusive</h2>
        <p>
          Tenachin is built for everyone—urban or rural, with or without
          internet—accessible through app, call, or SMS in multiple languages.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
