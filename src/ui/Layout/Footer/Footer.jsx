import { Col, Container, Row } from "react-bootstrap";

import "../Footer/Footer.scss";
import Heading from "../../Heading";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <Container fluid="lg">
        <Row>
          <Col lg={6}>
            <div className="footer-item-box">
              <img src="organic-store-white-logo.png" className="footer-logo" />
              <p>
                Maecenas mi justo, interdum at consectetur vel, tristique et
                arcu. Ut quis eros blandit, ultrices diam in, elementum ex.
                Suspendisse quis faucibus urna. Suspendisse pellentesque.
              </p>
            </div>
          </Col>
          <Col>
            <div className="footer__link-box footer__link-box--1">
              <Heading as="h3">Quick Links</Heading>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/checkout">Checkout</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/my-account">My Account</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
              </ul>
            </div>
            <div className="footer__link-box footer__link-box--2">
              <Heading as="h3">Site Links</Heading>
              <ul className="footer__links-box--container">
                <li>
                  <Link to="">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="">Shipping Details</Link>
                </li>
                <li>
                  <Link to="">Offer Coupons</Link>
                </li>
                <li>
                  <Link to="">Terms&Conditions</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="footer__mobile-app">
              <Heading as="h3">Download Our Mobile App</Heading>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                sequi voluptatibus porro, deserunt harum aut.
              </p>
            </div>

            <div className="footer__mobile-app--list">
              <Heading as="h3">Quick Links</Heading>
              <ul>
                <li>
                  <Link to="/about">Know More About Us</Link>
                </li>
                <li>
                  <Link to="/cart">Visit Store</Link>
                </li>
                <li>
                  <Link to="/checkout">Let’s Connect</Link>
                </li>
                <li>
                  <Link to="/contact">Locate Stores</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
