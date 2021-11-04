import styled from "styled-components";
//  STYLES
export const AttrText = styled.div`
  margin-right: 10px;
  //border: 1px solid grey;
  //padding: 0.6rem 0.6rem;
  width: 63px;
  height: 45px;
  cursor: pointer;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;

  &:hover {
    // background-color: lightgrey;
    //  color: white;
  }
`;
export const AttrSwatch = styled.div`
  border: 1px solid grey;
  border-radius: 100%;
  margin-right: 0.4rem;
  padding: 13px;
  cursor: pointer;
`;

export const SliderContain = styled.div`
  width: 100%;
  height: 100%;
`;

export const SliderImage = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: auto;
  box-sizing: border-box;

  & img {
    position: absolute;
    width: 100%;
    height: 300px;
    transition: all 0.2s;
  }
`;

export const TotalActions = styled.div`
  display: flex;
  flex-direction: column;
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
    height: 2rem;
    width: 1rem;
  }
`;

export const CartItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  margin-bottom: 1rem;

  & h2 {
    text-align: center;
    padding: 1rem 0;
    color: black;
  }
`;

export const CartItemAction = styled.div`
  width: 50%;
  display: flex;
  font-size: 0.7rem;
  position: relative;

  & span {
    font-size: 15px;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between !important;
    align-items: center !important;

    & a {
      border: 1px solid black;
      text-align: center;
      padding: 0.8rem;
    }
  }

  & div:last-child {
    position: relative;
    height: 192px;
    width: 141px;
    & img {
      padding-left: 5px;
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
`;
export const CartItemDescr = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  & h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    /* identical to box height, or 90% */
    display: flex;
    align-items: center;
    color: #1d1f22;
    margin-bottom: 16px;
  }
  & h4 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 27px;
    /* identical to box height, or 90% */
    display: flex;
    align-items: center;
    color: #1d1f22;
    margin-bottom: 16px;
  }

  & span {
    font-family: "Raleway";
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 18px;
    /* or 75% */

    display: flex;
    align-items: center;

    color: #1d1f22;
  }

  & div {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & a {
      border: 1px solid black;
      padding: 1rem;
      margin-right: 1rem;
    }
  }

  & img {
    width: 4rem;
    height: 3rem;
  }
`;
