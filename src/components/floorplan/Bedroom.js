import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./Bedroom.css";

import { bedroomKey } from "../../database/apartments";

// import { enableHoverCard } from "../../actions/hovers";
// import { updateHoverXY } from "../../actions/hovers";
// import { disableHoverCard } from "../../actions/hovers";

import { setCurrentBedroom } from "../../actions/apartments";

const addMonths = (date, months) => {
  date.setMonth(date.getMonth() + months);
  return date;
};

class Bedroom extends Component {
  // handleHoverEnable = e => {
  //   this.props.enableHoverCard(this.props.currentApartment, e.target.id);
  // };

  // handleHoverMove = e => {
  //   this.props.updateHoverXY(e.clientX, e.clientY);
  // };

  checkFilters = () => {
    const bedroom = this.props.bedroom;
    return this.checkDate(bedroom) && bedroom.rent <= this.props.maxRent;
  };

  checkDate = bedroom => {
    let endDate = addMonths(new Date(bedroom.start), bedroom.term);
    let filterDate = addMonths(new Date(), this.props.months);
    return endDate <= filterDate ? true : false;
  };

  drawBedroom = () => {
    const check = this.checkFilters();
    const bedroom = this.props.bedroom;
    const key = bedroomKey.find(key => key.name === bedroom.name);
    return (
      <Fragment>
        <rect
          // onMouseEnter={this.handleHoverEnable}
          // onMouseMove={this.handleHoverMove}
          // onMouseLeave={this.props.disableHoverCard}
          onClick={() => this.props.setCurrentBedroom(bedroom.name)}
          id={bedroom.name}
          className={
            check ? "bedroom bedroom-avail" : "bedroom bedroom-not-avail"
          }
          x={key.x}
          y={key.y}
          width={key.width}
          height={key.height}
          stroke="black"
          strokeWidth="1"
        />
        <text
          x={key.x + 10}
          y={key.y + 25}
          fontFamily="Verdana"
          fontSize="16"
          fill={check ? "white" : "#2c3e50"}
        >
          {this.props.currentApartment}
          {bedroom.name}
        </text>
      </Fragment>
    );
  };

  render() {
    console.log("bedroom rendered");
    return <Fragment>{this.drawBedroom()}</Fragment>;
  }
}

const mapStateToProps = state => ({
  maxRent: state.filters.maxRent,
  months: state.filters.months,
  petFriendly: state.filters.petFriendly,
  currentApartment: state.apartments.currentApartment
});

const mapDispatchToProps = dispatch => ({
  setCurrentBedroom: br => dispatch(setCurrentBedroom(br))
  // disableHoverCard: () => dispatch(disableHoverCard()),
  // enableHoverCard: (apt, br) => dispatch(enableHoverCard(apt, br)),
  // updateHoverXY: (x, y) => dispatch(updateHoverXY(x, y))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bedroom);
