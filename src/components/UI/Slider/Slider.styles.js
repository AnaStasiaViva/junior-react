import styled from "styled-components";
export const SliderContainer = styled.div`
  width: ${(props) => props.defaultWidth};
  height: ${(props) => props.defaultHeight};
  position: relative;
  overflow: hidden;
`;

export const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  z-index: 10;
  width: 20px;
  height: 20px;
  filter: invert(20%);
  -webkit-filter: invert(20%);

  &:hover {
    transform: scale(1.4);
    filter: invert(10%);
    -webkit-filter: invert(10%);
  }
`;
export const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 80%;
  z-index: 10;
  width: 20px;
  height: 20px;
  filter: invert(20%);
  -webkit-filter: invert(20%);

  &:hover {
    transform: scale(1.4);
    filter: invert(10%);
    -webkit-filter: invert(10%);
  }
`;

export const MainImage = styled.div`
  width: 141px;
  height: 180px;
  object-fit: cover;
  & img {
    width: 100%;
    height: 100%;
  }
`;
