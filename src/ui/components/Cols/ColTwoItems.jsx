/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";

export default function ColTwoItems({ children }) {
  return (
    <Col md={12} lg={6}>
      {children}
    </Col>
  );
}
