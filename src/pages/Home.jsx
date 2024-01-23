import BestSellersSection from "../ui/components/Sections/BestSellersSection";
import Hero from "../ui/components/Hero/Hero";
// import InfoContainer from "../ui/components/InfoContainer/InfoContainer";
import OffersSection from "../ui/components/Sections/OffersSection";
import FeaturesSection from "../ui/components/Sections/FeaturesSection";
import DiscountOfferSection from "../ui/components/Sections/DiscountOfferSection";
import TrendingProductsSection from "../ui/components/Sections/TrendingProductsSection";
import TestimonialsSection from "../ui/components/Sections/TestimonialsSection";

// import { MdLocalShipping } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <BestSellersSection />
      <OffersSection />
      <DiscountOfferSection />
      <TrendingProductsSection />
      <TestimonialsSection />
    </div>
  );
}
