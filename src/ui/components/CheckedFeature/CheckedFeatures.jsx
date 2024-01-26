import CheckedFeature from "./CheckedFeature";

const CheckedFeaturesArr = [
  "Fresh fruits",
  "Dry fruits",
  "Fresh vegetables",
  "Dried vegetables",
  "Cosmetics",
  "Beauty products",
  "Milk products",
  "Organic honey",
  "Organic tea",
];
export default function CheckedFeatures() {
  const splitFeatures = (features, index) =>
    features.map((feature, i) =>
      i >= index && i < index + 5 ? (
        <CheckedFeature key={feature}>{feature}</CheckedFeature>
      ) : null
    );

  return (
    <div style={{ display: "flex", gap: "8rem", marginBottom: "4rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {splitFeatures(CheckedFeaturesArr, 0)}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {splitFeatures(CheckedFeaturesArr, 5)}
      </div>
    </div>
  );
}
