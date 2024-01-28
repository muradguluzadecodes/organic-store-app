import Accordion from "../Accordion/Accordion";
import ColTwoItems from "../Cols/ColTwoItems";
import Section from "../Section/Section";

const faqDatas = [
  {
    question: "What does 'organic' mean in terms of food production?",
    answer:
      "ic food production involves growing and processing agricultural products without the use of syntheticbicides, pesticides, fertilizers, orengineered genes (MOs). Organic livestock must be raised in living conditions that accommodate their natural behaviors and fed organic feed and forage, without antibiotics, growth hormones, or animal by-products.",
  },
  {
    question: "Why is organic food better for mental and emotional health?",
    answer:
      "Organic foods often have more beneficial nutrients, such as antioxidants, than conventionally-grown counterparts. People with allergies to foods, chemicals, or preservatives may find their symptoms lessen or go away when they eat only organic foods. Organic produce contains fewer pesticides, and organic meat and milk can be richer in certain nutrients.",
  },
  {
    question: "How does organic food impact the environment?",
    answer:
      "Organic farming practices can reduce pollution, conserve water, reduce soil erosion, increase soil fertility, and use less energy. Farming without synthetic pesticides is also better for nearby birds and animals as well as people who live close to farms. Organically-raised animals are given more space to move around and access to the outdoors, which helps keep them healthy.",
  },
  {
    question: "What are the benefits of consuming organic meat and milk?",
    answer:
      "Organic meat and milk can be richer in certain nutrients, including omega-3 fatty acids, than conventionally raised versions. Organically-raised animals are not given antibiotics, growth hormones, or fed animal byproducts, which can lead to healthier animals and safer food products.",
  },
  {
    question: "Are organic foods GMO-free?",
    answer:
      "Yes, organic foods are GMO-free. Genetically Modified Organisms (GMOs) or genetically engineered (GE) foods are plants whose DNA has been altered in ways that cannot occur in nature or in traditional crossbreeding, most commonly in order to be resistant to pesticides or produce an insecticide. Organic standards prohibit the use of GMOs.",
  },
  {
    question: "What are the advantages of buying locally-grown organic food?",
    answer:
      "Buying locally-grown organic food keeps money within the local economy, reduces transportation costs and environmental impact, supports small farmers, and ensures freshness and flavor. Some small local farmers use organic methods but may not be certified organic, so it's essential to talk with farmers to understand their practices.",
  },
];

export default function FaqSection() {
  return (
    <Section headingText="Frequently Asked Questions">
      <ColTwoItems>
        {faqDatas.map(
          (faq, i) =>
            i < 3 && (
              <Accordion
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            )
        )}
      </ColTwoItems>
      <ColTwoItems>
        {faqDatas.map(
          (faq, i) =>
            i >= 3 && (
              <Accordion
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            )
        )}
      </ColTwoItems>
    </Section>
  );
}
