import React from "react";

const Bedroom = props => {
  return (
    <rect
      className={`${props.id}`}
      x={`${props.xOffset}`}
      y="0"
      width="50"
      height="50"
      stroke="black"
      fill="transparent"
      stroke-width="2"
    />
  );
};

export default Bedroom;
