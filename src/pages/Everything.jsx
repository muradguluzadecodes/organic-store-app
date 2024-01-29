import { Col } from "react-bootstrap";
import Section from "../ui/components/Section/Section";
import Heading from "../ui/components/Heading/Heading";

// { value: "name-asc", title: "Sort by name A-Z" },
// { value: "name-desc", title: "Sort by name Z-A" },
// { value: "regularPrice-asc", title: "Sort by prize (low first)" },
// { value: "regularPrice-desc", title: "Sort by prize (high first)" },
// { value: "maxCapacity-asc", title: "Sort by capacity (loww first)" },
// { value: "maxCapacity-desc", title: "Sort by capacity (high first)" },

export default function Everything() {
  return (
    <Section color="bg-milky">
      <Col md={12} lg={4}>
        first
      </Col>
      <Col md={12} lg={8}>
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
        </div>
      </Col>
    </Section>
  );
}
