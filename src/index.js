import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./store/reducers/index";

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const cache = new InMemoryCache({
  typePolicies: {
    GetProducts: {
      fields: {
        category: {
          products: relayStylePagination(),
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
