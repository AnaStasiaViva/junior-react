import React from "react";
import styled from "styled-components";

export const HomepageContainer = styled.header`
  position: absolute;
  margin-top: 100px;
  width: 100%;
  height: 100%;
`;

class Homepage extends React.PureComponent {
  render() {
    return <HomepageContainer>Homepage</HomepageContainer>;
  }
}
export default Homepage;
