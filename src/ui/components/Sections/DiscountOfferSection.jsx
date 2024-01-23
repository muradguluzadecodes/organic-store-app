import DiscountOfferComp from "../DiscountOfferComp/DiscountOfferComp";
import Section from "../Section/Section";
import "../../../scss/_utils.scss";

export default function DiscountOfferSection() {
  return (
    <>
      <Section color="bg-black">
        <DiscountOfferComp />
      </Section>
      <div className="pad-top-bot-md bg-milky" style={{ textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "24px", fontWeight: 700 }}>
          {" "}
          Try It For Free. No Registration Needed.{" "}
        </p>
      </div>
    </>
  );
}
