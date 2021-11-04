import React, { Component } from "react";
import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";

const AsyncComponent = (WrappedComponent) => {
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

const primaryQuery = gql`
  query getProducts {
    category {
      name
      products {
        id
        name
        brand
        category
        inStock
        prices {
          currency
          amount
        }
        gallery
        description
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
      }
    }
  }
`;

export default (graphql(primaryQuery), AsyncComponent);
