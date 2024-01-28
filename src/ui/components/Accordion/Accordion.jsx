/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Heading from "../Heading/Heading";
import { IoIosArrowUp } from "react-icons/io";
import "../Accordion/Accordion.scss";
import { useEffect, useRef, useState } from "react";

export default function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(null);

  function handleOpenAccordion() {
    setIsOpen(!isOpen);
  }
  const ref = useRef(null);

  useEffect(
    function () {
      setHeight(ref.current.scrollHeight);
    },
    [height, isOpen]
  );

  console.log(height);
  return (
    <div className="accordion">
      <div className="accordion-heading" onClick={handleOpenAccordion}>
        <Heading as="h5">{question}</Heading>
        <IoIosArrowUp
          className={`accordion-icon ${isOpen ? "icon-open" : "icon-close"}`}
          size={18}
        />
      </div>
      <div
        ref={ref}
        className={`accordion-text `}
        style={{
          height: `${isOpen ? height : "0"}px`,
          //   padding: `${isOpen ? "16" : "0"}px`,
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}
