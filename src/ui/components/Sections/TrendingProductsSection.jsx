import ProductCard from "../ProductCard/ProductCard";
import Section from "../Section/Section";

export default function TrendingProductsSection() {
  return (
    <Section headingText="Trending Products" color="bg-white">
      <ProductCard
        name="Air freshener"
        price={20}
        category="juice"
        image="orage-juice-kariz.jpg"
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
        image="coffee-asorted.jpg"
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
