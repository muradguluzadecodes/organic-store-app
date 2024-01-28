/* eslint-disable react/prop-types */
import { Row } from "react-bootstrap";
import Heading from "../Heading/Heading";
import "../SectionHeading/SectionHeading.scss";

export default function SectionHeading({ headingText, alignment }) {
  return (
    <Row>
      <div
        className="heading-box"
        style={{ alignItems: `${alignment ? alignment : "center"}` }}
      >
        <Heading as="h2">{headingText}</Heading>
        <img src="logo-leaf-new.png" alt="" />
      </div>
    </Row>
  );
}
