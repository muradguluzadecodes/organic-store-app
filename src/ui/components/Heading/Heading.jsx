/* eslint-disable react/prop-types */
import "../Heading/Heading.scss";

export default function Heading({ as, children }) {
  return (
    <>
      {as === "h1" && <h1>{children}</h1>}
      {as === "h2" && <h2>{children}</h2>}
      {as === "h3" && <h3>{children}</h3>}
      {as === "h4" && <h4>{children}</h4>}
      {as === "h5" && <h5>{children}</h5>}
      {as === "h6" && <h1>{children}</h1>}
    </>
  );
}
