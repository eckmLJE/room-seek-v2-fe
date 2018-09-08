import React from "react";

const Bedroom = props => {
  return (
    <rect
      className={`${props.id}`}
      x={`${props.xOffset}`}
      y="10"
      width="70"
      height="70"
      stroke="black"
      fill="transparent"
      strokeWidth="2"
    />
  );
};

export default Bedroom;
