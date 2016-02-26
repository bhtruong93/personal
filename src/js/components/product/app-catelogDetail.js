import React from "react";
import AppStore from "../../stores/app-store";
import StoreWatchMixin from "../../mixins/StoreWatchMixin";
import AppActions from "../../action/app-actions";
import CartButton from "../cart/app-cart-button";
import { Link } from "react-router";

function getCatelogItem(props) {
  let item = AppStore.getCatelog().find( ({ id }) => id === props.params.item )
  return {item};
}

const CatelogDetail = (props) => {
  return (
    <div >
      <h4>{ props.item.title }</h4>
      <img src="http://placehold.it/250x250"/>
      <p>{ props.item.description }</p>
      <p>${ props.item.cost }
        <span className="text-success">
          { props.item.qty && `(${props.item.qty} in cart)` }
        </span>
      </p>
      <div className="btn-group">
      <Link to="/" className="btn btn-default btn-sm">Continue Shopping</Link>
      </div>
      <CartButton
        handler={
          AppActions.addItem.bind(null, props.item)
        }
        txt="Add To Cart"
      />
    </div>
  )
}

export default StoreWatchMixin(CatelogDetail, getCatelogItem);
