import { Row } from "react-bootstrap";
import "../Logos/Logos.scss";

export default function Logos() {
  return (
    <Row className="pad-top-md">
      <div className="logos-box pad-top-md">
        <h4>Featured Brands:</h4>
        <div className="logos">
          <img src="logo-1.svg" alt="" />
          <img src="logo-2.svg" alt="" />
          <img src="logo-3.svg" alt="" />
          <img src="logo-4.svg" alt="" />
          <img src="logo-5.svg" alt="" />
        </div>
      </div>
    </Row>
  );
}
