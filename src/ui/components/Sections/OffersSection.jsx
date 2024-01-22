import OfferCard from "../OfferCard/OfferCard";
import Section from "../Section/Section";

export default function OffersSection() {
  return (
    <Section color="bg-milky">
      <OfferCard
        headingText="Farm Fresh Fruits"
        bodyText="Ut sollicitudin quam vel purus tempus, vel eleifend felis varius."
        image="lemon.png"
      />
      <OfferCard
        headingText="Fresh Vegetables"
        bodyText="Aliquam porta justo nibh, id laoreet sapien sodales vitae justo."
        image="cabbage.png"
      />
      <OfferCard
        headingText="Organic Legumes"
        bodyText="Ut sollicitudin quam vel purus tempus, vel eleifend felis varius."
        image="legume.jpg"
      />
    </Section>
  );
}
