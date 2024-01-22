import ProductCard from "../ProductCard/ProductCard";
import BestSellers from "./BestSellers";

export default function BestSellersSection() {
  return (
    <BestSellers>
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
    </BestSellers>
  );
}
