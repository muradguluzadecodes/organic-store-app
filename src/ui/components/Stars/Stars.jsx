/* eslint-disable react/prop-types */
import { IoIosStarOutline } from "react-icons/io";

export default function Stars({ size }) {
  return (
    <div className="star-box">
      <IoIosStarOutline size={size} />
      <IoIosStarOutline size={size} />
      <IoIosStarOutline size={size} />
      <IoIosStarOutline size={size} />
      <IoIosStarOutline size={size} />
    </div>
  );
}
