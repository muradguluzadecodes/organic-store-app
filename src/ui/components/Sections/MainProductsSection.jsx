import { Container, Row } from "react-bootstrap";

import Sort from "../Sort/Sort";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "../Pagination/Pagination";
import ColThreeItems from "../Cols/ColThreeItems";
import ProductsHeading from "../ProductsHeading/ProductsHeading";

export default function MainProductsSection() {
  return (
    <div className="products">
      <ProductsHeading />
      <Sort />
      <Container fluid>
        <Row>
          <ColThreeItems>
            <ProductCard
              name="Air freshener"
              price={20}
              category="juice"
              image="edible-oil-400x400.jpg"
            />
          </ColThreeItems>

          <ColThreeItems>
            <ProductCard
              name="Air freshener"
              price={20}
              category="juice"
              image="edible-oil-400x400.jpg"
            />
          </ColThreeItems>

          <ColThreeItems>
            <ProductCard
              name="Air freshener"
              price={20}
              category="juice"
              image="edible-oil-400x400.jpg"
            />
          </ColThreeItems>

          <ColThreeItems>
            <ProductCard
              name="Air freshener"
              price={20}
              category="juice"
              image="edible-oil-400x400.jpg"
            />
          </ColThreeItems>

          <ColThreeItems>
            <ProductCard
              name="Air freshener"
              price={20}
              category="juice"
              image="edible-oil-400x400.jpg"
            />
          </ColThreeItems>

          <ColThreeItems>
            <ProductCard
              name="Air freshener"
              price={20}
              category="juice"
              image="edible-oil-400x400.jpg"
            />
          </ColThreeItems>

          <ColThreeItems>
            <ProductCard
              name="Air freshener"
              price={20}
              category="juice"
              image="edible-oil-400x400.jpg"
            />
          </ColThreeItems>

          <ColThreeItems>
            <ProductCard
              name="Air freshener"
              price={20}
              category="juice"
              image="edible-oil-400x400.jpg"
            />
          </ColThreeItems>

          <ColThreeItems>
            <ProductCard
              name="Air freshener"
              price={20}
              category="juice"
              image="edible-oil-400x400.jpg"
            />
          </ColThreeItems>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
}
