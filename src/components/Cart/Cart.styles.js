import styled from "styled-components";

//styles
export const Line = styled.div`
  width: inherit;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 1rem;
`;

export const SingleCartWrap = styled.div``;

export const ModalLayout = styled.div`
  padding-top: 120px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  //padding: 2rem;

  & h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    /* identical to box height, or 125% */
    margin-bottom: 60px;
    text-transform: uppercase;

    color: #1d1f22;
  }
  & p {
    margin-bottom: 1rem;
    font-family: "Raleway";
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 40px;
    /* identical to box height, or 125% */
    margin-bottom: 1rem;
    color: grey;
    font-style: italic;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  & button {
  }
`;

export const TotalSum = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
    justify-content: space-between;
    & span {
      font-size: 1.5rem;

      margin-left: 1rem;
      display: flex;
      justify-content: space-between;
    }
  }
`;
