/* eslint-disable react/prop-types */
import ColFourItems from "../Cols/ColFourItems";
import "../FeatureCard/FeatureCard.scss";
import Heading from "../Heading/Heading";

export default function FeatureCard({ icon, heading, text }) {
  return (
    <ColFourItems>
      <div className="feature-card">
        <div className="feature-card__icon-box">{icon}</div>
        <div className="feature-card__text-box">
          <Heading as="h4">{heading}</Heading>
          <p>{text}</p>
        </div>
      </div>
    </ColFourItems>
  );
}
