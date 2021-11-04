import styled, { keyframes } from "styled-components";

export const animate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const SpinnerCircle = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  &::before {
    content: "";
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #99ff99, 0 0 0 20px #66ff66, 0 0 0 30px #00ff00,
      0 0 0 40px #00cc00, 0 0 0 50px #00e600, inset 0 0 40px rgba(0, 0, 0, 0.5);
  }
`;
export const SpinnerDots = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border-radius: 50%;
  animation: ${animate} 10s linear infinite;

  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    left: calc(50% - 5px);
    top: 0;
    box-shadow: 50px 0 0 #fff, -65px -50px 0 #fff, -65px 50px 0 #fff,
      -55px 0 0 #f07e6e, 45px 35px 0 #84cdfa, -40px -40px 0 #5ad1cd,
      40px -40px 0 #fff, 55px -59px 0 #fff;
    animation: ${animate} 10s linear infinite;
  }
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    left: calc(50% - 5px);
    bottom: 0;
    box-shadow: -50px 0 0 #fff, 65px 50px 0 #fff, 65px -50px 0 #fff,
      55px 0 0 #84cdfa, -45px -35px 0 #f07e6e, 40px 40px 0 #5ad1cd,
      -40px 40px 0 #fff, -55px 59px 0 #fff;
    animation: ${animate} 10s linear infinite;
  }
`;
