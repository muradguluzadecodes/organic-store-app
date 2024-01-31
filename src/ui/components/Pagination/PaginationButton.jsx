/* eslint-disable react/prop-types */
import "./PaginationButton.scss";

export default function PaginationButton({ children, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`pagination-btn ${isActive ? "active" : ""}`}
    >
      {children}
    </button>
  );
}
