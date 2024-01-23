/* eslint-disable react/prop-types */
import { Row } from "react-bootstrap";
import Heading from "../Heading/Heading";
import "../SectionHeading/SectionHeading.scss";

export default function SectionHeading({ headingText }) {
  return (
    <Row>
      <div className="heading-box">
        <Heading as="h2">{headingText}</Heading>
        <img src="logo-leaf-new.png" alt="" />
      </div>
    </Row>
  );
}
