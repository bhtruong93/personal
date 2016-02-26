import React from "react";
import AppActions from "../action/app-actions";
import Catelog from "./catelog/app-catelog";
import Cart from "./cart/app-cart"

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Catelog />
        <Cart />
      </div>
    )
  }
}
