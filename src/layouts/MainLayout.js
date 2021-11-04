import React from "react";
import Header from "../components/Header/Header";
import { graphql } from "@apollo/client/react/hoc";
import Spinner from "../components/UI/Spinner/Spinner";
import { CATEGORY } from "../Query/Query";
import { MainLayoutWrapper } from "./MainLayout.styles";

class MainLayout extends React.PureComponent {
  render() {
    const { data } = this.props;
    if (data.loading) {
      return <Spinner />;
    }
    if (data.error) {
      return <p>Error!</p>;
    }

    return (
      <MainLayoutWrapper>
        {data && <Header />}

        <div>{this.props.children}</div>
      </MainLayoutWrapper>
    );
  }
}

const withQuery = graphql(CATEGORY);

export default withQuery(MainLayout);
