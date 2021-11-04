import styled from "styled-components";

export const ModalLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(57, 55, 72, 0.22);
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 110;
  opacity: 1;
  position: fixed;
  overflow: hidden;
  & div {
    display: flex;
    justify-content: flex-end;
    position: relative;
    max-width: 1285px;
    //background-color: yellow;
  }
`;
