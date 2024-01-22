/* eslint-disable react/prop-types */
// const Heading = styled.h1`
//   font-family: "Merriweather", serif;
//   ${(props) =>
//     props.type === "h1" &&
//     css`
//       font-size: 4rem;
//       font-weight: 600;
//     `}
//   ${(props) =>
//     props.as === "h2" &&
//     css`
//       font-size: 2rem;
//       font-weight: 600;
//     `}
//     ${(props) =>
//     props.as === "h3" &&
//     css`
//       font-size: 2rem;
//       font-weight: 600;
//     `}
//     ${(props) =>
//     props.as === "h4" &&
//     css`
//       font-size: 3rem;
//       font-weight: 600;
//       text-align: center;
//     `};
// `;

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
