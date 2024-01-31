import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import { Link, NavLink } from "react-router-dom";
import "../Navigation/Navigation.scss";
import Basket from "../../Icons/Basket";
import UserIcon from "../../Icons/UserIcon";
import { Col, Row } from "react-bootstrap";
import { CgMenuRight } from "react-icons/cg";

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
                <ul className="links__items links__items--1">
                  <li>
                    <NavLink to="/home">Everything</NavLink>
                  </li>
                  <li>
                    <NavLink to="/groceries">Groceries</NavLink>
                  </li>

                  <li>
                    <NavLink to="/juice">Juice</NavLink>
                  </li>
                </ul>
                <ul className="links__items links__items--2">
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
                <ul className="icons">
                  <li>
                    <Basket />
                  </li>
                  <li className="user">
                    <UserIcon />
                  </li>
                  <li className="menu">
                    <CgMenuRight color="#fff" size={18} />
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
