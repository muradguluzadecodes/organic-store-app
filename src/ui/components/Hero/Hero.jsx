import { Col, Container, Row } from "react-bootstrap";
import "../Hero/Hero.scss";
import "../../../scss/_utils.scss";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";

import { RiShoppingCart2Line } from "react-icons/ri";

export default function Hero() {
  return (
    <div className="hero">
      <Container>
        <Row className="pad-top-bot-xlg row">
          <Col className="pad-top-bot-lg">
            <div className="hero__img-box">
              <img src="organic-products-hero.png" />
            </div>
          </Col>
          <Col>
            <div className="hero__content-box">
              <img src="logo-leaf-new.png" />
              <Heading as="h2">Best Quality Products</Heading>
              <Heading as="h1">Join The Organic Movement!</Heading>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                neque at enim impedit rem explicabo. Iusto necessitatibus ad
                soluta nulla.
              </p>
              <Button
                size="medium"
                onClick=""
                left={true}
                icon={<RiShoppingCart2Line className="icon" size={18} />}
              >
                <span>Shop Now</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
