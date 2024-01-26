import Heading from "../Heading/Heading";
import "../CheckedFeature/BadgedHeading.scss";

export default function BadgedHeading() {
  return (
    <div className="badged-heading">
      <img
        src="organic-badge-freeimg.png"
        alt=""
        className="badged-heading__img"
      />
      <div className="badged-heading__text-box">
        <Heading as="h3">Certified Products</Heading>
        <p>Click edit button to change this text. Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
}
