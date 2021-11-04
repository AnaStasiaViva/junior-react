import styled, { keyframes } from "styled-components";
//STYLES
export const Main = styled("div")`
  font-family: sans-serif;
  position: absolute;
`;

export const DropDownContainer = styled("div")`
  //width: 2rem;
  // margin: 0 auto;
  //text-align: center; ///
  //position: relative;
`;

export const DropDownHeader = styled("div")`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  /* identical to box height, or 29px */

  color: #1d1f22;
  //position: relative;
  //top: -5px;

  & div {
    width: 10px;
    height: 10px;
    //background-color: red;
    // position: relative;

    & img {
      // position: absolute;
      // top: 20px;
      // left: 30px;

      max-width: 100%;
      max-height: 100%;
      z-index: 100;
    }
  }
`;

export const DropDownListContainer = styled("div")`
  //width: 114px;
  //border: 1px solid blue;
  //position: relative;
  // background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DropDownList = styled("ul")`
  background: #ffffff;
  color: #3faffa;
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -13px;

  //margin-top: 6.9rem;
  //box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  &:first-child {
    // padding-top: 0.8em;
  }
`;

export const animate = keyframes` 
    0% {
      opacity: 0;
      transform: rotateX(-90deg);
    }
    100% {
      opacity: 1;
      transform: rotateX(0);
    }`;

export let ListItem = styled("li")`
  list-style: none;
  // margin-bottom: 0.8em;
  color: black;
  cursor: pointer;
  padding-bottom: 10px;
  &:hover &:first-of-type {
    animation: ${animate} 0.3s ease-in-out forwards;
    animation-delay: 0.3s;
  }

  &:hover &li:nth-of-type(2) {
    animation: ${animate} 0.3s ease-in-out forwards;
    animation-delay: 0.6s;
  }

  &:hover &li:nth-of-type(3) {
    animation: ${animate} 0.3s ease-in-out forwards;
    animation-delay: 0.9s;
  }

  &:hover &li:last-of-type {
    animation: ${animate} 0.3s ease-in-out forwards;
    animation-delay: 1.2s;
  }
  &:hover {
    background-color: rgba(20, 20, 20, 0.03);
    // cursor: pointer;
  }
`;

ListItem = styled(ListItem)`
  animation: ${animate} 0.5s ease-in-out forwards;
  // animation-delay: 0.1s;
`;
