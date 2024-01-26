import ColThreeItems from "../Cols/ColThreeItems";
import Section from "../Section/Section";
import Stats from "../Stats/Stats";

export default function StatsSection() {
  return (
    <Section color="bg-black">
      <ColThreeItems>
        <Stats num={5000} name="Curated Products" />
      </ColThreeItems>
      <ColThreeItems>
        <Stats num={800} name="Curated Products" />
      </ColThreeItems>
      <ColThreeItems>
        <Stats num={40} name="Product Categories" />
      </ColThreeItems>
    </Section>
  );
}
