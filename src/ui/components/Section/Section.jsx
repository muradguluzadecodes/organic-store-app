/* eslint-disable react/prop-types */
// import { Container, Row } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

import "../../../scss/_utils.scss";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function Section({ children, headingText, color }) {
  return (
    <section className={`${color} pad-top-bot-xlg`}>
      <Container>
        {headingText && <SectionHeading headingText={headingText} />}
        <Row>{children}</Row>
      </Container>
    </section>
  );
}
