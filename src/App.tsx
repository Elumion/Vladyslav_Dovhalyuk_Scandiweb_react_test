import React, { Component } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ProductListing } from "./pages/ProductListing";

class App extends Component<any, any> {
  render(): React.ReactNode {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/categories/:categoryName"
            element={
              <Layout>
                <ProductListing />
              </Layout>
            }
          ></Route>
          <Route path="/" element={<Navigate to="/categories/all" />}></Route>
          <Route path="*" element={<Navigate to="/categories/all" />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
