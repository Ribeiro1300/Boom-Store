import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/LoginAndSignup";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Products />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/:product_id" exact>
          <SingleProduct />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
