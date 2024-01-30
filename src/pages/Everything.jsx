import { Col, Container, Row } from "react-bootstrap";
import Section from "../ui/components/Section/Section";
import Heading from "../ui/components/Heading/Heading";

import ProductCard from "../ui/components/ProductCard/ProductCard";
import ProductsPageColLeft from "../ui/components/Cols/ProductsPageColLeft";
import ProductsPageColRight from "../ui/components/Cols/ProductsPageColRight";

// { value: "name-asc", title: "Sort by name A-Z" },
// { value: "name-desc", title: "Sort by name Z-A" },
// { value: "regularPrice-asc", title: "Sort by prize (low first)" },
// { value: "regularPrice-desc", title: "Sort by prize (high first)" },
// { value: "maxCapacity-asc", title: "Sort by capacity (loww first)" },
// { value: "maxCapacity-desc", title: "Sort by capacity (high first)" },

export default function Everything() {
  return (
    <Section color="bg-milky">
      <ProductsPageColLeft>First</ProductsPageColLeft>

      <ProductsPageColRight>
        <div className="products">
          <div className="products-header">
            <p>Home/Shop</p>
            <Heading as="h1">Shop</Heading>
          </div>
          <div className="products-sort">
            <p>Showing X-X of X results</p>
            <select name="sort" id="sort">
              <option value="name-asc">Sort by name A-Z</option>
              <option value="name-desc">Sort by name Z-A</option>
              <option value="regularPrice-asc">Sort by prize: low first</option>
              <option value="regularPrice-desc">
                Sort by prize: high first
              </option>
              <option value="popularity">Sort by price: high to low</option>
            </select>
          </div>
          <Container fluid>
            <Row>
              <Col sm={12} md={4}>
                <ProductCard
                  name="Air freshener"
                  price={20}
                  category="juice"
                  image="edible-oil-400x400.jpg"
                />
              </Col>
              <Col sm={12} md={4}>
                <ProductCard
                  name="Air freshener"
                  price={20}
                  category="juice"
                  image="edible-oil-400x400.jpg"
                />
              </Col>
              <Col sm={12} md={4}>
                <ProductCard
                  name="Air freshener"
                  price={20}
                  category="juice"
                  image="edible-oil-400x400.jpg"
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={4}>
                <ProductCard
                  name="Air freshener"
                  price={20}
                  category="juice"
                  image="edible-oil-400x400.jpg"
                />
              </Col>
              <Col sm={12} md={4}>
                <ProductCard
                  name="Air freshener"
                  price={20}
                  category="juice"
                  image="edible-oil-400x400.jpg"
                />
              </Col>
              <Col sm={12} md={4}>
                <ProductCard
                  name="Air freshener"
                  price={20}
                  category="juice"
                  image="edible-oil-400x400.jpg"
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={4}>
                <ProductCard
                  name="Air freshener"
                  price={20}
                  category="juice"
                  image="edible-oil-400x400.jpg"
                />
              </Col>
              <Col sm={12} md={4}>
                <ProductCard
                  name="Air freshener"
                  price={20}
                  category="juice"
                  image="edible-oil-400x400.jpg"
                />
              </Col>
              <Col sm={12} md={4}>
                <ProductCard
                  name="Air freshener"
                  price={20}
                  category="juice"
                  image="edible-oil-400x400.jpg"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </ProductsPageColRight>
    </Section>
  );
}
