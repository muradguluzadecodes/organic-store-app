import BestSellersSection from "../ui/components/BestSellers/BestSellersSection";
import Hero from "../ui/components/Hero/Hero";
import InfoContainer from "../ui/components/InfoContainer/InfoContainer";

// import { MdLocalShipping } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <Hero />
      <InfoContainer />
      <BestSellersSection />
    </div>
  );
}
