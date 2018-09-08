import React, { Component } from "react";
import { connect } from "react-redux";

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

  render() {
    console.log(this.checkFilters());
    return (
      <rect
        // className={this.checkFilters()}
        x={`${this.props.xOffset}`}
        y="10"
        width="70"
        height="70"
        stroke="black"
        fill={this.checkFilters() ? "green" : "transparent"}
        strokeWidth="2"
      />
    );
  }
}

const mapStateToProps = state => ({
  maxRent: state.filters.maxRent,
  months: state.filters.months,
  petFriendly: state.filters.petFriendly
});

export default connect(
  mapStateToProps,
  null
)(Bedroom);
