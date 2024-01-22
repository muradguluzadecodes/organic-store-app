/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";

export default function ColThreeItems({ children }) {
  return (
    <Col sm={12} md={12} lg={4}>
      {children}
    </Col>
  );
}
