import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import { Link, NavLink } from "react-router-dom";
import "../Navigation/Navigation.scss";
import Basket from "../../Icons/Basket";
import UserIcon from "../../Icons/UserIcon";
import { Col, Row } from "react-bootstrap";

export default function Navigation() {
  return (
    <header className="header">
      <Container fluid="lg">
        <Row>
          <Col>
            <nav className="navigation">
              <div className="logo-box">
                <Link to="/">
                  <img
                    src="organic-store-logo5.svg"
                    className="logo-box__logo"
                  />
                </Link>
              </div>
              <div className="links">
                <ul className="links__items">
                  <li>
                    <NavLink to="/everything">Everything</NavLink>
                  </li>
                  <li>
                    <NavLink to="/other">Groceries</NavLink>
                  </li>

                  <li>
                    <NavLink to="/juice">Juice</NavLink>
                  </li>
                </ul>
                <ul className="links__items">
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>

                  <li>
                    <Basket />
                  </li>
                  <li>
                    <UserIcon />
                  </li>
                </ul>
              </div>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
