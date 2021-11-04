import React from "react";
import vectorRight from "../../../assets/images/vectorRight.png";
import vectorLeft from "../../../assets/images/vectorLeft.png";

import {
  SliderContainer,
  LeftArrow,
  RightArrow,
  MainImage,
} from "./Slider.styles";

export default class Slider extends React.PureComponent {
  state = {
    imgIndex: 0,
    images: [this.props.images],
    activeItem: 0,
    sliderShow: this.props.showSlider,
    showArrows: false,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.activeItem !== nextState.activeItem;
  }

  render() {
    const { images, showSlider } = this.props;

    const imagesNextHandler = () => {
      if (this.state.images && this.state.activeItem < images.length - 1) {
        this.setState({ activeItem: this.state.activeItem + 1 });
      }
    };

    const imagePrevHandler = () => {
      if (this.state.images && this.state.activeItem > 0) {
        this.setState({ activeItem: this.state.activeItem - 1 });
      }
    };

    return (
      <SliderContainer defaultWidth defaultHeight>
        {showSlider && this.state.images[0].length > 1 && (
          <RightArrow onClick={() => imagesNextHandler()}>
            <img alt="right" src={vectorRight}></img>
          </RightArrow>
        )}

        {showSlider && this.state.images[0].length > 1 && (
          <LeftArrow onClick={() => imagePrevHandler()}>
            <img alt="left" src={vectorLeft}></img>
          </LeftArrow>
        )}

        <MainImage>
          {this.state.images && (
            <img src={images[this.state.activeItem]} alt="pic"></img>
          )}
        </MainImage>
      </SliderContainer>
    );
  }
}


