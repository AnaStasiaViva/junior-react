import styled from "styled-components";

//STYLES
export const HeaderContainer = styled.header`
  height: 80px;
  width: 1210px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background-color: #fff;
  z-index: 1000;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }

  & nav {
    display: flex;
    justify-content: flex-end;
    padding-right: 1rem;
    align-self: flex-end;

    & ul {
      display: flex;
      justify-content: flex-end;
      padding-right: 1rem;
      align-items: center;

      & li:not(:last-child) {
        // padding-right: 1rem;
      }
      & li {
        padding-right: 1rem;
        text-transform: uppercase;
        margin: 0 auto;

        & a {
          padding-bottom: 30px;

          font-family: "Raleway";
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 120%;
          /* identical to box height, or 19px */

          display: flex;
          align-items: center;
          text-align: center;
          text-transform: uppercase;

          /* --c-text */

          color: #1d1f22;
        }
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & div:first-child {
    cursor: pointer;
    width: 10px;
  }

  & div:last-child {
    position: relative;

    cursor: pointer;
    & img {
      width: 20px;
      // position: relative;
    }

    & span {
      font-size: 10px;
      background-color: black;
      color: white;
      padding: 3.5px 7px;
      border-radius: 100%;
      position: absolute;
      top: -12px;
      left: 14px;

      font-family: "Roboto";
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;
      text-align: center;
      text-transform: uppercase;

      color: #ffffff;
    }
  }
  & div:not(:last-child) {
    // width: 2rem;
    margin-right: 4.2rem;
  }

  & span {
    font-size: 2rem;
  }
`;
export const Logo = styled.div`
  position: absolute;
  left: 50%;
  right: 50%;
  width: 31.181222915649414px;
  border-radius: 0px;
`;
