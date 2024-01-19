/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { formatCurrency } from "../lib/utils";

const StyledPrice = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;

  /* color: ${(props) => (props.color === "green" ? "#8bc34a" : "#1f2937")}; */

  ${(props) =>
    props.color === "green" &&
    css`
      color: #8bc34a;
    `}
`;

export default function Price({ value, color }) {
  return <StyledPrice color={color}>{formatCurrency(value)}</StyledPrice>;
}
