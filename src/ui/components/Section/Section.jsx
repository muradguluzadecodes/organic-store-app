/* eslint-disable react/prop-types */
// import { Container, Row } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

import "../../../scss/_utils.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import "../Section/Section.scss";

export default function Section({
  children,
  headingText,
  color = "bg-white",
  hasLeaf,
  alignmentHeading,
}) {
  return (
    <section
      className={`${color} ${hasLeaf ? "has-leaf" : ""}  ${
        color === "bg-black" ? "pad-top-bot-md" : "pad-top-bot-xlg"
      }`}
    >
      <Container>
        {headingText && (
          <SectionHeading
            alignment={alignmentHeading}
            headingText={headingText}
          />
        )}
        <Row>{children}</Row>
      </Container>
    </section>
  );
}
