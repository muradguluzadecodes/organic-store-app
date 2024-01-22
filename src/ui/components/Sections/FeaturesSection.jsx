import { PiCertificateFill } from "react-icons/pi";
import FeatureCard from "../FeatureCard/FeatureCard";
import Section from "../Section/Section";
import { MdLocalShipping } from "react-icons/md";
import { formatCurrency } from "../../../lib/utils";
import { FaMoneyBillAlt, FaRecycle } from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <Section color="bg-black">
      <FeatureCard
        icon={<MdLocalShipping size={34} />}
        heading="Free Shipping"
        text={`Below ${formatCurrency(5)} only`}
      />

      <FeatureCard
        icon={<PiCertificateFill size={34} />}
        heading="Certified Organic"
        text="100% Guarantee"
      />

      <FeatureCard
        icon={<FaMoneyBillAlt size={34} />}
        heading="Huge Savings"
        text={`Below ${formatCurrency(5)} only`}
      />

      <FeatureCard
        icon={<FaRecycle size={34} />}
        heading="Easy Return"
        text="No Questions Asked"
      />
    </Section>
  );
}
