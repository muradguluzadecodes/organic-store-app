import { Row } from "react-bootstrap";
import Heading from "../Heading/Heading";
import "../SectionHeading/SectionHeading.scss";

export default function SectionHeading() {
  return (
    <Row>
      <div className="heading-box">
        <Heading as="h2">Best Selling Products</Heading>
        <img src="logo-leaf-new.png" alt="" />
      </div>
    </Row>
  );
}
