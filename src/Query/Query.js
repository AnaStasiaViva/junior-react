import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";

export const CATEGORIES = gql`
  query GetProducts($query: String!, $cursor: String) {
    categories(first: 5, query: $query, after: $cursor) {
      name
      products {
        id
        name
        inStock
        description
        category
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
        prices {
          currency
          amount
        }
        brand
      }
    }
  }
`;

export const CATEGORY_WITH_ONSCROLL = gql`
  query GetProducts($cursor: String) {
    category {
      name
      cursor
      products(first: 5, after: $cursor) {
        edges {
          node {
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
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

export const CATEGORY = gql`
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

export const CURRENCIES = gql`
  query getCurrencies {
    currencies
  }
`;

export const CARD = gql`
  query getCard {
    category {
      products {
        id
        name
        brand
        inStock
        prices {
          amount
        }
        gallery
      }
    }
  }
`;

export const withQuery = graphql(
  gql`
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
  `
);

/*export const CATEGORIES = gql`
  query GetProducts($cursor: String, $limit: Int!) {
    getProducts(cursor: $cursor, limit: $limit) {
      cursor
      categories {
        name
        products {
          id
          name
          inStock
          description
          category
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
          prices {
            currency
            amount
          }
          brand
        }
      }
    }
  }
`; */
