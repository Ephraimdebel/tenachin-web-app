import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import faqData from "../../data/FAQ.json";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="faq section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>Frequently Asked Questions</p>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-12">
            <div className="custom-accordion" id="accordion-faq">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  index={index}
                  question={item.question}
                  answer={item.answer}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
