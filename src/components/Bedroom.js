import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./Bedroom-css.css";
import moment from "moment";

import { bedroomKey } from "../database/apartments";

import { setCurrentBedroom } from "../actions/apartments";

const addMonths = (date, months) => {
  date.setMonth(date.getMonth() + months);
  return date;
};

class Bedroom extends Component {
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
          onMouseEnter={this.enableHover}
          onMouseLeave={this.disableHover}
          onMouseMove={this.handleHover}
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
          fontSize="12"
          fill={check ? "white" : "#2c3e50"}
        >
          {this.props.currentApartment}
          {bedroom.name}
        </text>
        <text
          x={key.x + 10}
          y={key.y + 40}
          fontSize="10"
          fill={check ? "white" : "#2c3e50"}
        >
          ${bedroom.rent} / mo.
        </text>
        <text
          x={key.x + 10}
          y={key.y + 55}
          fontSize="8"
          fill={check ? "white" : "#2c3e50"}
        >
          Available:{" "}
          {moment(addMonths(new Date(bedroom.start), bedroom.term))
            .add(1, "days")
            .calendar()}
        </text>
      </Fragment>
    );
  };

  render() {
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bedroom);
