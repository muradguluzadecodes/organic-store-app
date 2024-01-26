import PageHeading from "../ui/components/PageHeading/PageHeading";
import CertifiedProductsSection from "../ui/components/Sections/CertifiedProductsSection";
import MainAboutSection from "../ui/components/Sections/MainAboutSection";
import StatsSection from "../ui/components/Sections/StatsSection";

export default function About() {
  return (
    <>
      <PageHeading />
      <MainAboutSection />
      <StatsSection />
      <CertifiedProductsSection />
    </>
  );
}
