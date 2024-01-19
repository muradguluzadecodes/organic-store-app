import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";
import "../Navigation/Navigation.scss";
import Basket from "../../Icons/Basket";
import UserIcon from "../../Icons/UserIcon";

export default function Navigation() {
  return (
    <header className="header">
      <Container fluid="lg">
        <nav className="navigation">
          <div className="logo-box">
            <Link to="/">
              <img src="organic-store-logo5.svg" className="logo-box__logo" />
            </Link>
          </div>
          <div className="links">
            <ul className="links__items">
              <li>
                <Link to="/everything">Everything</Link>
              </li>
              <li>
                <Link to="/other">Groceries</Link>
              </li>

              <li>
                <Link to="/juice">Juice</Link>
              </li>
            </ul>
            <ul className="links__items">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
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
      </Container>
    </header>
  );
}
