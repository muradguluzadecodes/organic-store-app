/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";

export default function ColFourItems({ children }) {
  return (
    <Col sm={12} md={6} lg={3}>
      {children}
    </Col>
  );
}
