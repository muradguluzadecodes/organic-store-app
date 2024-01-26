import DiscountOfferCard from "../DiscountOfferCard/DiscountOfferCard";
import Section from "../Section/Section";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "../../../scss/_utils.scss";
import Logos from "../Logos/Logos";
import ColThreeItems from "../Cols/ColThreeItems";
// import { Row } from "react-bootstrap";

export default function TestimonialsSection() {
  return (
    <Section
      alignmentHeading="center"
      headingText="Customers Reviews"
      color="bg-milky"
    >
      <ColThreeItems>
        <TestimonialCard />
      </ColThreeItems>
      <ColThreeItems>
        <DiscountOfferCard />
      </ColThreeItems>
      <ColThreeItems>
        <TestimonialCard />
      </ColThreeItems>
      <Logos />
    </Section>
  );
}
