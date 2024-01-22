import { RiShoppingCart2Line } from "react-icons/ri";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
// import { Col } from "react-bootstrap";
import "../DiscountOfferComp/DiscountOfferComp.scss";

export default function DiscountOfferComp() {
  return (
    <div className="discount-offer">
      <Heading as="h2">Get 25% Off On Your First Purchase!</Heading>
      <Button
        onClick={() => {}}
        left={true}
        type="primary"
        size="medium"
        icon={<RiShoppingCart2Line className="icon" size={18} />}
      >
        Shop Now
      </Button>
    </div>
  );
}
