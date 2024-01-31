import Section from "../ui/components/Section/Section";

import ProductsPageColLeft from "../ui/components/Cols/ProductsPageColLeft";
import ProductsPageColRight from "../ui/components/Cols/ProductsPageColRight";
import MainProductsSection from "../ui/components/Sections/MainProductsSection";

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
        <MainProductsSection />
      </ProductsPageColRight>
    </Section>
  );
}
