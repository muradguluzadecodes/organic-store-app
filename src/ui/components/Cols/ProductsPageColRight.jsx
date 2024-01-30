/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";

export default function ProductsPageColRight({ children }) {
  return (
    <Col
      sm={{ order: 2, span: 12 }}
      md={{ span: 12, order: 1 }}
      lg={{ span: 8, order: 2 }}
    >
      {children}
    </Col>
  );
}
