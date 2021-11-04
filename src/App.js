import React from "react";
import { GlobalStyles } from "./GlobalStyles.style";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Cart from "./components/Cart/Cart";
import ProductListingPage from "./components/ProductListingPage/ProductListingPage";
import ProductDescriptionPage from "./components/ProductDescriptionPage/ProductDescriptionPage";
import NotFound from "./components/UI/NotFound/NotFound";

class App extends React.PureComponent {
  render() {
    return (
      <>
        <GlobalStyles />
        <Router>
          <MainLayout>
            <Switch>
              <Route
                exact
                path={"/"}
                render={() => {
                  return (
                    <Redirect
                      to={"/category/all"}
                      component={ProductListingPage}
                    />
                  );
                }}
              />
              <Route path="/cart" component={Cart} />

              <Route
                path="/category/:category"
                component={ProductListingPage}
              />

              <Route path="/product/:id" component={ProductDescriptionPage} />
              <Route path="/notFound" component={NotFound} />
              <Redirect from="*" to="/notFound" />
            </Switch>
          </MainLayout>
        </Router>
      </>
    );
  }
}

export default App;

/* */
