import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
export default graphql(
  gql`
    query getCurrencies {
      currencies
    }
  `,
  {
    options: (props) => ({
      // Options are computed from `props` here.
    }),

    props: ({ data: { currencies } }) => ({
      currencies: currencies,
    }),
  }
);
