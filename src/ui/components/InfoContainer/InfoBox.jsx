/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";
import "../InfoContainer/InfoBox.scss";

export default function InfoBox({ children }) {
  return (
    <Col className="info-box--container" sm={12} md={6} lg={3}>
      {children}
    </Col>
  );
}
