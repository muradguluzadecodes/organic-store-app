/* eslint-disable react/prop-types */
import "../Button/Button.scss";

// iconun sag ve ya solda olmagini hell edecem

const Button = ({ onClick, type = "primary", size, children, icon, left }) => {
  return (
    <button
      className={`button btn-type--${type} btn-size--${size}`}
      onClick={onClick}
    >
      <span>{left ? icon : ""}</span> {children}{" "}
      <span>{!left ? icon : ""}</span>
    </button>
  );
};

export default Button;
