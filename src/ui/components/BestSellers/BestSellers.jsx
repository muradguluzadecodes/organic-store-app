/* eslint-disable react/prop-types */
// import { Container, Row } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import "../BestSellers/BestSellers.scss";

export default function BestSellers({ children }) {
  return (
    <section className="best-sellers">
      <Container>
        <Row>{children}</Row>
      </Container>
    </section>
  );
}
