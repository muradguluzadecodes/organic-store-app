/* eslint-disable react/prop-types */
import { IoIosStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

export default function Stars({ size, filled = false }) {
  const starIcons = filled ? (
    <IoMdStar size={size} color="#ffbb1e" />
  ) : (
    <IoIosStarOutline size={size} />
  );

  return (
    <div className="star-box">
      <div className="star-box">
        {Array.from({ length: 5 }, (_, i) => i + 1).map(() => starIcons)}
      </div>
    </div>
  );
  // return (
  // return (
  //   <div className="star-box">
  //     {[1, 2, 3, 4, 5].map((item) => (
  //       <IoIosStarOutline size={size} key={item} />
  //     ))}
  //   </div>
  // );
  // );
}
