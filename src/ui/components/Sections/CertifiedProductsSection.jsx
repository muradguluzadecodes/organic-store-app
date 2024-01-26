import Section from "../Section/Section";
import ColTwoItems from "../Cols/ColTwoItems";

import CertifiedProductsContent from "../CheckedFeature/CertifiedProductsContent";
import CertifiedProductsTestimonial from "../CheckedFeature/CertifiedProductsTestimonial";

export default function CertifiedProductsSection() {
  return (
    <Section color="bg-milky">
      <ColTwoItems>
        <CertifiedProductsTestimonial />
      </ColTwoItems>
      <ColTwoItems>
        <CertifiedProductsContent />
      </ColTwoItems>
    </Section>
  );
}
