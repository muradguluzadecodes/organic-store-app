import { Col } from "react-bootstrap";
import Heading from "../Heading/Heading";
import Section from "../Section/Section";

export default function PageHeading() {
  return (
    <Section color="bg-milky">
      <Col fluid className="d-flex justify-content-center">
        <Heading as="h1">About Us</Heading>
      </Col>
    </Section>
  );
}
