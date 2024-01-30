import ColFourItems from "../Cols/ColFourItems";
import ProductCard from "../ProductCard/ProductCard";
import Section from "../Section/Section";

export default function TrendingProductsSection() {
  return (
    <Section
      alignmentHeading="center"
      headingText="Trending Products"
      color="bg-white"
    >
      <ColFourItems>
        <ProductCard
          name="Air freshener"
          price={20}
          category="juice"
          image="orage-juice-kariz.jpg"
        />
      </ColFourItems>
      <ColFourItems>
        <ProductCard
          name="Air freshener"
          price={20}
          category="juice"
          image="edible-oil-400x400.jpg"
          sale={true}
        />
      </ColFourItems>
      <ColFourItems>
        <ProductCard
          name="Air freshener"
          price={20}
          category="juice"
          image="coffee-asorted.jpg"
        />
      </ColFourItems>
      <ColFourItems>
        <ProductCard
          name="Air freshener"
          price={20}
          category="juice"
          image="edible-oil-400x400.jpg"
          sale={true}
        />
      </ColFourItems>
    </Section>
  );
}
