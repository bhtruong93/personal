import React from "react";
import AppStore from "../../stores/app-store";
import CatelogItem from "./app-catelogItem";
import StoreWatchMixin from "../../mixins/StoreWatchMixin"

function getCatelog() {
  return {items: AppStore.getCatelog()}
}

const Catelog = ( props ) => {
    let items = props.items.map( (item) => {
      return <CatelogItem key={ item.id } item={ item } />
    });
    return (
      <div className="row">
        { items }
      </div>
    )
}

export default StoreWatchMixin(Catelog, getCatelog);
