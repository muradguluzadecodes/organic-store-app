import ProductCard from "../ProductCard/ProductCard";
import Section from "../Section/Section";

export default function BestSellersSection() {
  return (
    <Section
      alignmentHeading="center"
      headingText="Best Selling Products"
      color="bg-white"
    >
      <ProductCard
        name="Air freshener"
        price={20}
        category="juice"
        image="edible-oil-400x400.jpg"
      />
      <ProductCard
        name="Air freshener"
        price={20}
        category="juice"
        image="edible-oil-400x400.jpg"
        sale={true}
      />
      <ProductCard
        name="Air freshener"
        price={20}
        category="juice"
        image="edible-oil-400x400.jpg"
      />
      <ProductCard
        name="Air freshener"
        price={20}
        category="juice"
        image="edible-oil-400x400.jpg"
        sale={true}
      />
    </Section>
  );
}
