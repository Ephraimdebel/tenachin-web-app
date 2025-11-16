import React from "react";

const AccordionItem = ({ question, answer, index, activeIndex, setActiveIndex }) => {
  const isActive = index === activeIndex;

  return (
    <div className="accordion-item">
      <h2 className="mb-0">
        <button
          className={`btn btn-link ${isActive ? "" : "collapsed"}`}
          type="button"
          onClick={() => setActiveIndex(isActive ? null : index)}
        >
          {question}
        </button>
      </h2>
      <div className={`collapse ${isActive ? "show" : ""}`}>
        <div className="accordion-body">
          {answer.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
