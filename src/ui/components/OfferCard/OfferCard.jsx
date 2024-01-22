/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import ColThreeItems from "../Cols/ColThreeItems";
import Heading from "../Heading/Heading";
import { RiArrowRightLine } from "react-icons/ri";
import "../OfferCard/OfferCard.scss";

export default function OfferCard({ headingText, bodyText, image }) {
  return (
    <ColThreeItems>
      <div className="offer-card">
        <div className="offer-card__content-box">
          <Heading as="h3">{headingText}</Heading>
          <p>{bodyText}</p>
          <Button
            type="primary"
            size="medium"
            icon={<RiArrowRightLine size={20} color="white" />}
            onClick={() => {}}
          >
            Shop Now
          </Button>
        </div>
        <div className="offer-card__img-box">
          <img src={image} alt="" />
        </div>
      </div>
    </ColThreeItems>
  );
}
