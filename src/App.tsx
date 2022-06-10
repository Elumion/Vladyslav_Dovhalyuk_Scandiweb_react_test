import React, { Component } from "react";
import { Layout } from "./components/Layout";

class App extends Component {
  render(): React.ReactNode {
    return (
      <>
        <div>AAAAA</div>
        <Layout>
          <div>test1</div>
          <div>test2</div>
        </Layout>
      </>
    );
  }
}

export default App;
