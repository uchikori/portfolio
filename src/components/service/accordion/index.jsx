import * as React from "react";
import { useRef } from "react";
import { useState } from "react";

export const Accordion = (props) => {
  const { headingtitle, headingAlt, text } = props;

  const [textIsOpen, setTextIsOpen] = useState(false);

  const refText = useRef(null);

  const toggleText = () => {
    setTextIsOpen((textIsOpen) => {
      return !textIsOpen;
    });
  };
  return (
    <div className={`accordion-item ${textIsOpen ? "is-active" : ""}`}>
      <div className="accordion-title ">
        <h3 className="accordion-title__service">
          <img src={`../images/${headingtitle}.svg`} alt={headingAlt} />
        </h3>
        <button className="toggle-btn hoverTarget" onClick={toggleText}>
          <span></span>
        </button>
      </div>
      <div
        className={`accordion-text ${textIsOpen ? "is-open" : ""}`}
        ref={refText}
        style={{
          "--text-height": refText.current
            ? `${refText.current.scrollHeight}px`
            : "0px",
        }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};
