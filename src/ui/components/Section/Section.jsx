/* eslint-disable react/prop-types */
// import { Container, Row } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

import "../../../scss/_utils.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import "../Section/Section.scss";

export default function Section({
  children,
  headingText,
  color = null,
  hasLeaf,
}) {
  return (
    <section
      className={`${color} ${hasLeaf ? "has-leaf" : ""}  pad-top-bot-xlg`}
    >
      <Container>
        {headingText && <SectionHeading headingText={headingText} />}
        <Row>{children}</Row>
      </Container>
    </section>
  );
}
