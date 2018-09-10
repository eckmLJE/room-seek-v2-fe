import React, { Fragment } from "react";
import { connect } from "react-redux";

const HoverCard = props => {
  return (
    <Fragment>
      {props.hoverId <= 4 ? (
        <div
          className="hover-box"
          style={{
            position: "fixed",
            top: props.hoverY,
            left: props.hoverX,
            border: "2px solid #2c3e50",
            backgroundColor: "white",
            width: 150,
            height: 150,
            zIndex: 1000
          }}
        />
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  hoverX: state.hovers.x,
  hoverY: state.hovers.y,
  hover: state.hovers.hover,
  hoverId: state.hovers.apt
});

export default connect(
  mapStateToProps,
  null
)(HoverCard);
