// import ColThreeItems from "../Cols/ColThreeItems";
import Stars from "../Stars/Stars";
import UserInfo from "../UserInfo/UserInfo";
import "../TestimonialCard/TestimonialCard.scss";

export default function TestimonialCard() {
  return (
    // <ColThreeItems>
    <div className="testimonial-card">
      <Stars filled={true} size={24} />
      <p className="testimonial-card__body-text">
        Click edit button to change this text. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
        mattis, pulvinar dapibus leo.
      </p>
      <UserInfo image="client01.png" userName="Murad Guluzade" />
    </div>
    // </ColThreeItems>
  );
}
