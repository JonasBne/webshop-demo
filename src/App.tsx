import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import theme from "./theme";
import Navbar from "./views/Navigation/Navbar";
import Home from "./views/Home/Home";
import ProductEdit from "./views/ProductDetail/ProductEdit";
import ProductList from "./views/ProductList/ProductList";
import GlobalStyle from "./theme/globalStyle";
import ProductAdd from "./views/ProductDetail/ProductAdd";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products/admin" element={<ProductList />} />
        <Route path="products/:productId/edit" element={<ProductEdit />} />
        <Route path="products/new" element={<ProductAdd />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
