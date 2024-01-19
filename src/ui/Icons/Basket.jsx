import { BsBasket2 } from "react-icons/bs";

import styled from "styled-components";
import Price from "../Price";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
`;

const BasketBox = styled.div`
  position: relative;
`;

const StyledRound = styled.div`
  background-color: #8bc34a;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 100%;
  position: absolute;
  top: -1.6rem;
  left: 1rem;
`;

const Value = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 800;
`;

export default function Basket() {
  return (
    <StyledContainer>
      <Price color="green" value={200} />
      <BasketBox>
        <BsBasket2 size="2rem" color="#8bc34a" />
        <StyledRound>
          <Value>5</Value>
        </StyledRound>
      </BasketBox>
    </StyledContainer>
  );
}
