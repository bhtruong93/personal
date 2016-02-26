import React from "react";
import CartSummary from "./app-cartSummary";

export default () => {
  return(
    <div className="col-sm-2">
      <h1>Store</h1>
    </div>
    <div className="col-sm-10 text-right">
      <CartSummary />
    </div>
  );
}
