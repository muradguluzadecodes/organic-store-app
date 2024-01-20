/* eslint-disable react/prop-types */
import "../Main/Main.scss";

export default function Main({ children }) {
  return <main style={{ minHeight: "50rem" }}>{children}</main>;
}
