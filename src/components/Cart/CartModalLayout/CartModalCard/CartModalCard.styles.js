import styled from "styled-components";

export const ModalLayout = styled.div`
  max-width: 22rem;
  height: auto;
  display: flex;
  flex-direction: column;
  z-index: 110;
  background-color: #fff;
  padding: 1rem 1rem 0 1rem;
  position: absolute;
  top: 50px;
  margin: 50px -10px;

  & h2 {
    padding-bottom: 1rem;
    font-family: "Raleway";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const Actions = styled.div`
  display: flex;
  // background-color: red;
  justify-content: space-between !important;
  align-items: center !important;
  margin-bottom: 1rem;
  cursor: pointer;

  & a {
    & button:first-child {
      height: 43px;
      width: 140px;
      border-radius: 0px;
      padding: 16px 32px;
      background: #ffffff;
      border: 1px solid #1d1f22;
      margin: 0px 10px;
      font-family: "Raleway";
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      cursor: pointer;
    }
  }

  & button:not(:first-child) {
    height: 43px;
    width: 140px;
    border-radius: 0px;
    background: #5ece7b;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    color: #ffffff;
    border: none;
    border-radius: 0px;
    cursor: pointer;
  }
`;

export const TotalSum = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between !important;

  & div {
    display: flex;
    justify-content: space-between;

    /* or 112% */

    color: #1d1f22;
    & span {
      margin-left: 10px;
      //display: flex;
      //justify-content: space-between;

      font-family: "Raleway";
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 160%;
      /* identical to box height, or 26px */

      //display: flex;
      // align-items: center;
      //text-align: right;
      color: #1d1f22;
    }
  }
`;
