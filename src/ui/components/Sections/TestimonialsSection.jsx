import DiscountOfferCard from "../DiscountOfferCard/DiscountOfferCard";
import Section from "../Section/Section";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "../../../scss/_utils.scss";
import Logos from "../Logos/Logos";
// import { Row } from "react-bootstrap";

export default function TestimonialsSection() {
  return (
    <Section headingText="Customers Reviews" color="bg-milky">
      <TestimonialCard />
      <DiscountOfferCard />
      <TestimonialCard />
      <Logos />
    </Section>
  );
}
