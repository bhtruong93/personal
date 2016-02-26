import React from "react";
import AppActions from "../action/app-actions";
import Catelog from "./catelog/app-catelog";
import Cart from "./cart/app-cart";
import Template from "./app-template";
import { Router, Route, IndexRoute } from "react-router";
import CatelogDetail from "./product/app-catelogDetail";

export default () => {
  return (
    <Router>
      <Route path="/" component={Template}>
        <IndexRoute component={ Catelog }></IndexRoute>
        <Route path="cart" component={ Cart }></Route>
        <Route path="item/:item" component={ CatelogDetail }></Route>
      </Route>
    </Router>
  )
}
