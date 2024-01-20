import { Col, Container, Row } from "react-bootstrap";

import "../Footer/Footer.scss";
import Heading from "../../Heading";
import { Link } from "react-router-dom";
import "../../../scss/_utils.scss";
import "../../../scss/_variables.scss";

import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container pad-bottom-lg">
        <Container fluid="lg">
          <Row>
            <Col lg={6}>
              <div className="footer-item-box">
                <img
                  src="organic-store-white-logo.png"
                  className="footer-logo"
                />
                <p>
                  Maecenas mi justo, interdum at consectetur vel, tristique et
                  arcu. Ut quis eros blandit, ultrices diam in, elementum ex.
                  Suspendisse quis faucibus urna. Suspendisse pellentesque.
                </p>
              </div>
            </Col>
            <Col>
              <div className="footer__link-box ">
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
              <div className="footer__link-box mg-top-md">
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

              <div className="footer__mobile-app mg-top-lg">
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

              <div className="footer__stores mg-top-md">
                <Link
                  to="https://play.google.com/store/games?device=windows&hl=TR"
                  target="blank"
                >
                  <img src="play-store.png" alt="" />
                </Link>
                <Link to="https://www.apple.com/app-store/" target="blank">
                  <img src="app-store.png" alt="" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="pad-top-lg">
        <Row>
          <Col className="footer-bottom">
            <div className="copyright">
              <p>Copyright by Murad Guluzade 2024 | Organic Store </p>
            </div>
            <div className="socials">
              <Link to="">
                <FaInstagram size="20px" />
              </Link>
              <Link to="">
                <FaFacebook size="20px" />
              </Link>
              <Link to="">
                <FaXTwitter size="20px" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
