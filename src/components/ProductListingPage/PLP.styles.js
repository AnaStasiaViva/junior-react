import styled, { keyframes } from "styled-components";

//styles

export const animate = keyframes` 
    0% {
    opacity: 0;
    transform: scale(2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }`;

export const PDPWrapper = styled.div`
  padding-top: 100px;
  max-width: 1440px;
`;

export const PDPCategoryName = styled.div`
  margin-bottom: 5rem;

  & h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: normal;
    font-size: 42px;
    line-height: 160%;

    display: flex;
    align-items: center;

    color: #1d1f22;

    & span {
      color: #5ece7b;
      margin-left: 10px;
    }
  }
`;
export let PDPCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

PDPCardsWrapper = styled(PDPCardsWrapper)`
  animation: ${animate} 0.5s ease-in-out forwards;
  // animation-delay: 0.1s;
`;
