import styled, { keyframes } from "styled-components";

export const DangerMessage = styled.div`
  color: red;
  font-size: 20px;
  margin-top: 20px;
`;
export const WarningMessage = styled.div`
  color: grey;
  font-size: 20px;
  margin-top: 20px;
`;

export const AttrText = styled.li`
  width: 63px;
  height: 45px;
  margin-right: 10px;
  border: 0.5px solid grey;
  font-size: 12px;
  text-align: center;
  font-size: 16px;
  line-height: 18px;
  cursor: pointer;
  text-align: center !important;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #292929;

  background-color: ${(props) => props.activeColor || ""};
`;
export const AttrSwatch = styled.li`
  border: 0.5px solid grey;
  border-radius: 50%;
  margin-right: 0.5rem;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: lightgrey;
  border: none;
`;
export const Description = styled.div`
  width: 100%;
  margin-top: 50px;
  & div {
    color: #1d1f22;
    & div {
      & ul {
        & li {
          padding-bottom: 10px;
          font-size: 15px;
          font-family: "Roboto";
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 159.96%;
        }
      }
    }
  }
`;

export const Size = styled.div`
  margin-top: 43px;
  & h4 {
    font-size: 25px;
    & span {
      font-family: "Roboto Condensed";
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 18px;
      width: 200px;
      color: #1d1f22;
    }
  }

  & div {
    display: flex;
    flex-direction: row;
    margin-top: 8px;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Price = styled.div`
  font-size: 20px;
  padding: 30px 0;
  font-weight: 800;
  //background-color: yellow;

  & div {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #1d1f22;
    padding-bottom: 10px;
  }

  & span {
    font-family: "Raleway";
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 18px;
    margin-top: 10px;
    /* or 75% */

    display: flex;
    align-items: center;

    color: #1d1f22;
  }
`;

export const StyledButton = styled.button`
  padding: 1.2rem 3rem;
  background-color: green;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 15px 15px -5px green;
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
  &:active {
    box-shadow: 0px 4px 8px green;
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
  }
`;

export const Button = styled.button`
  padding: 1.2rem 3rem;
  background-color: green;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 16px 32px;
  width: 292px;
  height: 52px;
  left: 929px;
  top: 478px;
  background: #5ece7b;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  justify-content: center;
  color: #ffffff;

  &:hover {
    box-shadow: 0px 15px 10px -5px green;
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
  &:active {
    box-shadow: 0px 4px 8px green;
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
  }
`;

export const animate = keyframes` 
    0% {
    opacity: 0;
    transform: scale(2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }`;

export const Container = styled.div`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  padding-top: 200px;

  & button {
    padding: 1rem;
    font-size: 1rem;
    background-color: lightgreen;
    border: none;
    color: white;
    font-weight: 800;
  }
  & div {
    & div {
      width: 100px;
      &img {
        width: 100%;
      }
    }
  }
`;

export const Left = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // background-color: yellow;
  height: 511px;

  & div {
    //max-height: 511px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    object-fit: contain;

    & img {
      width: 79px;
      height: 80px;
      object-fit: contain;

      &:hover {
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
      }
    }
  }
`;
export const Center = styled.div`
  width: 50%;
  height: 511px;
  width: 610px;

  & img {
    height: 100%;
    object-fit: cover;
  }
`;

export const Right = styled.div`
  width: 35%;
  height: 100%;
  padding-left: 20px;

  & div {
    width: 100% !important;
    // margin-bottom: 15px;

    & h2 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 27px;
      display: flex;
      align-items: center;
      color: #1d1f22;
      margin-bottom: 16px;
    }

    & h3 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: normal;
      font-size: 30px;
      line-height: 27px;
      display: flex;
      align-items: center;
      color: #1d1f22;
    }
  }
`;
