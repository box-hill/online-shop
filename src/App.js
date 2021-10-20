import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import ItemDetail from "./components/ItemDetail";
import Footer from "./components/Footer";

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/shop/:id" component={ItemDetail} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
