import styled from "styled-components";

//STYLES PRODUCT LISTING ITEMS =====================
export const ImageWrapper = styled.div`
  height: 330px;
  width: 354px;
  border-radius: 0px;
  //padding-bottom: 24px;

  & img {
    //padding-bottom: 24px;
    background-size: cover;
    height: 325px;
    width: 354px;
    object-fit: cover;
  }
`;

export const CartButton = styled.div`
  position: absolute;
  top: 72%;
  left: 80%;
  opacity: 0;
  height: 52px;
  width: 52px;
  border-radius: 100%;
  background-color: #5ece7b;
  display: flex;
  //justify-content: center;
  //align-items: center;

  &:hover {
    box-shadow: 0px 5px 12px -2px green;
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
  &:active {
    box-shadow: 0px 4px 8px green;
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
  }
  & img {
    z-index: 100;
    max-width: 60%;
    max-height: 60%;
    margin: 0 auto;
    position: absolute;
    margin: 0 auto;
    transform: translate(20%, 18%);
    top: 8px;
    left: 8px;
  }
`;

export const ProdDescription = styled.div`
  background-color: #fff;

  & div {
    & h3 {
      color: #1d1f22;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 160%;
      /* identical to box height, or 29px */

      display: flex;
      align-items: center;
    }

    & span {
      font-family: "Raleway";
      font-style: normal;
      font-size: 18px;
      line-height: 160%;
      /* identical to box height, or 29px */
      text-align: right;
      /* --c-black */
      color: #1d1f22;
    }
  }
`;

export const ListingItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-wrap: wrap;
  margin-right: 36px;
  cursor: pointer;
  height: 444px;
  width: 386px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  padding: 16px 16px 0 16px;
  //background-color: lightyellow;
  margin-bottom: 2rem;

  &:hover ${CartButton} {
    opacity: 1;
  }

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    height: 444px;
    width: 386px;
    border-radius: 0px;
  }

  & h3 {
    color: grey;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 160%;
  }
  & span {
    font-weight: 700;
    font-size: 20px;
  }

  & p {
    color: black;
    font-size: 30px;
    line-height: 55px;
    background: #ffffff;
    opacity: 0.5;
    width: 100%;
    height: 100%;

    & span {
      position: absolute;
      top: 35%;
      left: 50%;
      transform: translate(-50%, -30%);
      font-size: 35px;
      display: block;
      font-family: "Raleway";
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 160%;
      /* identical to box height, or 38px */
      display: flex;
      align-items: center;
      color: #8d8f9a;
    }
  }
`;
