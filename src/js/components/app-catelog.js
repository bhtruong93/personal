import React from "react";
import AppStore from "../stores/app-store";
import CatelogItem from "./app-catelogItem";

function getCatelog() {
  return {items: AppStore.getCatelog()}
}

class Catelog extends React.Component {
  constructor() {
    super();
    this.state = getCatelog();
  }
  render() {
    console.log(this.state.items);
    let items = this.state.items.map( (item) => {
      return <CatelogItem key={ item.id } item={ item } />
    })
    return (
      <div className="row">
        { items }
      </div>
    )
  }
}

export default Catelog;
