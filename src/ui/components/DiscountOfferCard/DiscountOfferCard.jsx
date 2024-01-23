import { RiArrowRightLine } from "react-icons/ri";
import Button from "../Button/Button";
import ColThreeItems from "../Cols/ColThreeItems";
import "../DiscountOfferCard/DiscountOfferCard.scss";

export default function DiscountOfferCard() {
  return (
    <ColThreeItems>
      <div className="discount-offer-card">
        <span className="background"></span>

        <div className="text-box">
          <p className="heading">Deal Of The Day 15% Off On All Fruits!</p>
          <p className="body-text">
            I am text block. Click edit button to change this tex em ips.
          </p>
        </div>
        <div className="button-box">
          <Button icon={<RiArrowRightLine size={20} color="white" />}>
            shop now
          </Button>
        </div>
      </div>
    </ColThreeItems>
  );
}
