import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/LoginAndSignup";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Style from "./AppStyle";
import Profile from "./pages/Profile";
import ProtectedRoute from "./utils/ProtectedRoute";

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
        <Route path="/:product_id" exact>
          <SingleProduct />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
