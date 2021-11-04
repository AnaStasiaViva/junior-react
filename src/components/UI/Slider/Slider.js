import React, { Component } from "react";
import vectorRight from "../../../assets/images/vectorRight.png";
import vectorLeft from "../../../assets/images/vectorLeft.png";

import {
  SliderContainer,
  LeftArrow,
  RightArrow,
  MainImage,
} from "./Slider.styles";

export default class Slider extends Component {
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

/*componentDidMount() {
    console.log(this.state.images[0].length);
  } */

/* handleEvent = (e, actionType, item, items) => {
    e.preventDefault();
    let itemsLength, activeItem;
  }; */

/*const imageSliderHandler = () => {
      if (this.state.images && this.state.activeItem < images.length - 1) {
        this.setState({ activeItem: this.state.activeItem + 1 });
      }
      if (this.state.images && this.state.activeItem > 0) {
        this.setState({ activeItem: this.state.activeItem - 1 });
      }
    }; */

/* {this.state.images &&
            this.state.images.map((image, idx) => <img src={image}></img>)} */

/*switch (actionType) {
      case "clickItem":
        //console.info('MenuContent->paginationRender', { actionType, id: item.id, item });
        this.setState({ activeItem: item.id });
        break;
      case "prevItem":
        activeItem = this.state.activeItem;
        if (activeItem === 0) {
          break;
        }
        activeItem -= 1;
        this.setState({ activeItem });
        break;
      case "nextItem":
        itemsLength = items.length;
        activeItem = this.state.activeItem;
        if (activeItem === itemsLength - 1) {
          break;
        }
        activeItem += 1;
        this.setState({ activeItem });
        break;
    } */
