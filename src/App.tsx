import React, { Component } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ProductListing } from "./pages/ProductListing";

class App extends Component<any, any> {
  componentDidMount() {
    const windowWorkSpace = window as any;
    windowWorkSpace.addEventListener("click", (e: any) => {
      if (!e.target.matches(".show")) {
        const showList = document.getElementsByClassName("show");

        for (let i = 0; i < showList.length; i++) {
          showList[i].classList.remove("show");
        }
      }
    });
  }

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
