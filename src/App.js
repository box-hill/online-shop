import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import ItemDetail from "./components/ItemDetail";
import Footer from "./components/Footer";

import './App.css';

const App = () => {

  const [cart, setCart] = useState([{id: 1, quantity: 3}, {id: 3, quantity: 2}]);

  return (
    <BrowserRouter>
      <Nav cart={cart} setCart={setCart}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={() => <Shop cart={cart} setCart={setCart}/>} />
        <Route path="/shop/:id" component={(props) => <ItemDetail {...props} cart={cart} setCart={setCart} />} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
