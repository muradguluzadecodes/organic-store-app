/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";
import "../../../scss/_utils.scss";

export default function ColThreeItems({ children }) {
  return (
    <Col sm={12} md={12} lg={4} className="mg-bottom-sm">
      {children}
    </Col>
  );
}
