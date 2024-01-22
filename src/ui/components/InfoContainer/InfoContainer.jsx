import "../InfoContainer/InfoContainer.scss";
import "../../../scss/_utils.scss";

import Features from "../Features/Features";
import InfoBox from "./InfoBox";
import { MdLocalShipping } from "react-icons/md";
import FeatureCard from "../FeatureCard/FeatureCard";
import { formatCurrency } from "../../../lib/utils";
import { PiCertificateFill } from "react-icons/pi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa6";

export default function InfoContainer() {
  return (
    <Features>
      <InfoBox>
        <FeatureCard
          icon={<MdLocalShipping size={34} />}
          heading="Free Shipping"
          text={`Below ${formatCurrency(5)} only`}
        />
      </InfoBox>
      <InfoBox>
        <FeatureCard
          icon={<PiCertificateFill size={34} />}
          heading="Certified Organic"
          text="100% Guarantee"
        />
      </InfoBox>
      <InfoBox>
        <FeatureCard
          icon={<FaMoneyBillAlt size={34} />}
          heading="Huge Savings"
          text={`Below ${formatCurrency(5)} only`}
        />
      </InfoBox>
      <InfoBox>
        <FeatureCard
          icon={<FaRecycle size={34} />}
          heading="Easy Return"
          text="No Questions Asked"
        />
      </InfoBox>
    </Features>
  );
}
