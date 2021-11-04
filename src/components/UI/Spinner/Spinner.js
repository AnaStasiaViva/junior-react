import React from "react";
import { SpinnerWrapper, SpinnerCircle, SpinnerDots } from "./Spinner.styles";

class Spinner extends React.PureComponent {
  render() {
    return (
      <SpinnerWrapper>
        <SpinnerCircle>
          <SpinnerDots></SpinnerDots>
        </SpinnerCircle>
      </SpinnerWrapper>
    );
  }
}
export default Spinner;
