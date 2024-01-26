/* eslint-disable react/prop-types */
import { FaRegCircleCheck } from "react-icons/fa6";
import "../../../scss/_variables.scss";

export default function CheckedFeature({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <FaRegCircleCheck size={17} color="#8bc34a" />
      <p style={{ fontSize: "1.6rem", fontWeight: "500" }}>{children}</p>
    </div>
  );
}
