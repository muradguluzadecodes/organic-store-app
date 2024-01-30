/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";

export default function ProductsPageColLeft({ children }) {
  return (
    <Col
      sm={{ order: 2 }}
      md={{ span: 12, order: 2 }}
      lg={{ span: 4, order: 1 }}
    >
      {children}
    </Col>
  );
}
