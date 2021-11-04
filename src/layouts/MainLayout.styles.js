import styled from "styled-components";

export const MainLayoutWrapper = styled.div`
  max-width: 100vw;
  height: auto;
  position: relative;
  //margin: 0 5rem 0 5rem;

  padding: 0 5rem 0 5rem;

  max-width: 1440px;

  @media (max-width: 768px) {
    margin: 0 3rem 0 3rem;
  }
  @media (max-width: 550px) {
    margin: 0 2rem 0 2rem;
  }
`;
