import Heading from "../Heading/Heading";
import "../ProductsHeading/ProductsHeading.scss";

export default function ProductsHeading() {
  return (
    <div className="products-heading">
      <p>Home / Shop</p>
      <Heading as="h1">Shop</Heading>
    </div>
  );
}
