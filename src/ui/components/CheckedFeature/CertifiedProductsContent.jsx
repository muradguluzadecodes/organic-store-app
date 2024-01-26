import Button from "../Button/Button";
import SectionHeading from "../SectionHeading/SectionHeading";
import BadgedHeading from "./BadgedHeading";
import CheckedFeatures from "./CheckedFeatures";
import { RiShoppingCart2Line } from "react-icons/ri";
import "../CheckedFeature/CertifiedProductsContent.scss";

export default function CertifiedProductsContent() {
  return (
    <div className="checked-features-content">
      <BadgedHeading />
      <SectionHeading
        headingText="We Deal With Various Quality Organic Products!"
        alignment="flex-start"
      />
      <CheckedFeatures />

      <Button
        size="medium"
        onClick={() => {}}
        left={true}
        icon={<RiShoppingCart2Line className="icon" size={18} />}
      >
        <span>Shop Now</span>
      </Button>
    </div>
  );
}
