/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";
import "../../../scss/_utils.scss";

export default function ColFourItems({ children }) {
  return (
    <Col sm={12} md={6} lg={3} className="mg-bottom-sm">
      {children}
    </Col>
  );
}
