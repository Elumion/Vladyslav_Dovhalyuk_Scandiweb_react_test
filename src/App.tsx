import React, { Component } from "react";
import {
  // BrowserRouter as Router,
  Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Layout } from "./components/Layout";

class App extends Component<any, any> {
  render(): React.ReactNode {
    return (
      <>
        <Router history={}>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/categories/:categoryName">
                <Layout>
                  <div></div>
                  <div></div>
                </Layout>
              </Route>
              <Route exact path="/">
                <Redirect to="/categories/all" />
              </Route>
              <Route path="*">
                <Redirect to="/categories/all" />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
