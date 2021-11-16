import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/LoginAndSignup";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import ProtectedRoute from "./utils/ProtectedRoute";

import "./styles/reset.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Products />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <ProtectedRoute path="/profile" exact>
          <Profile />
        </ProtectedRoute>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/products/:product_id" exact>
          <SingleProduct />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
