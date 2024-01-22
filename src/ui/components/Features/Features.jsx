/* eslint-disable react/prop-types */
import { Container, Row } from "react-bootstrap";
import "../Features/Features.scss";

export default function Features({ children }) {
  return (
    <section className="features">
      <Container>
        <Row className="info__row-container">{children}</Row>
      </Container>
    </section>
  );
}
