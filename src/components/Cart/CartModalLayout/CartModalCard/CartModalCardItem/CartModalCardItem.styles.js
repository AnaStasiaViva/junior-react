import styled from "styled-components";
//  STYLES

export const AttrText = styled.div`
  //height: 25px;
  margin-right: 10px;
  padding: 0.3rem 0.3rem;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #1d1f22;
  box-sizing: border-box;

  &:hover {
  }
`;
export const AttrSwatch = styled.div`
  border: 0.5px solid grey;
  border-radius: 100%;
  margin-right: 0.3rem;
  padding: 5px;
  cursor: pointer;
`;

export const SliderContain = styled.div`
  width: 100%;
  height: 100%;
`;

export const SliderImage = styled.div`
  position: relative;
  width: 105px;
  height: 137px;
  margin: auto;
  box-sizing: border-box;
  //display: flex;
  //align-items: center;
  overflow: hidden;

  & img {
    position: absolute;
    width: 100%;
    height: 137px;
    transition: all 0.2s;
  }
`;

export const TotalActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Arrow = styled.div`
  background-color: lightgreen;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 1rems;
    top: 50%;
  }
`;

export const CartItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.5rem;
  margin-bottom: 2rem;

  & h2 {
    text-align: center;

    color: black;
  }
`;

export const CartItemAction = styled.div`
  width: 45%;
  position: relative;
  display: flex;
  justify-content: space-between;
  & span {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    /* identical to box height, or 26px */

    text-align: right;

    color: #1d1f22;
  }
  & img {
    width: 100%;
    height: 100%;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between !important;
    align-items: center !important;

    & a {
      border: 1px solid black;
      text-align: center;
      padding: 2px 6px;

      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
    }
  }

  & div:last-child {
    position: relative;
    width: 105px;
    height: 137px;

    & img {
      padding-left: 5px;
    }
  }
`;
export const CartItemDescr = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;

  & h3 {
    font-size: 1rem;
    color: grey;
    font-family: "Raleway";
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;

    margin-bottom: 10px;
    color: #1d1f22;
  }
  & h4 {
    font-family: "Raleway";
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0px;
    // text-align: left;
    margin-bottom: auto;
    line-height: 160%;
    /* or 26px */
    display: flex;
    align-items: center;
    color: #1d1f22;
  }

  & span {
    font-family: "Raleway";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    margin-bottom: auto;
  }

  & div {
    //background-color: blue;
    display: flex;
    justify-content: flex-start !important;
    align-items: center !important;

    & a {
      border: 1px solid black;
      height: 24px;
      width: 24px;
      padding: 0.3rem 0.3rem;
    }
  }
`;

export const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: inherit;
  position: relative;

  &::after:not(:last-child) {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    padding: 2rem;
    border: 1px solid grey;
    width: 100%;
    height: 1px;
  }
  // padding: 0 1rem;
`;
