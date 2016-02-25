import React from "react";

export default (props) => {
  return (
    <button
      className="btn btn-default btn-sm"
      onCLick={ props.handler }>
        { props.txt }
    </button>
  )
}
