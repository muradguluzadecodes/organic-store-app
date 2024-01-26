/* eslint-disable react/prop-types */
import "../Stats/Stats.scss";

export default function Stats({ num, name }) {
  return (
    <div className="stats-box">
      <p className="stats-box__num">{num}+</p>
      <p className="stats-box__name">{name}</p>
    </div>
  );
}
