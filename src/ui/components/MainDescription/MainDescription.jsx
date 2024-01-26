/* eslint-disable react/prop-types */
import ColTwoItems from "../Cols/ColTwoItems";
import Heading from "../Heading/Heading";
import "../MainDescription/MainDescription.scss";

export default function MainDescription({ heading, children }) {
  return (
    <>
      <ColTwoItems>
        <div className="main-description__text-box">
          <Heading as="h2">{heading}</Heading>
          {children}
        </div>
      </ColTwoItems>
      <ColTwoItems>
        <div className="main-description__img-box">
          <img src="banner-01.jpg" className="mw-100" alt="" />
        </div>
      </ColTwoItems>
    </>
  );
}
