import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bedroomKey } from "../../database/apartments";

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
          x={key.x}
          y={key.y}
          width={key.width}
          height={key.height}
          stroke="black"
          fill={check ? "#2c3e50" : "transparent"}
          strokeWidth="2"
        />
        <text
          x={key.x + 10}
          y={key.y + 20}
          fontFamily="Verdana"
          fontSize="10"
          fill={check ? "white" : "#2c3e50"}
        >
          Bedroom {this.props.currentApartment}
          {bedroom.name}
        </text>
        <text
          x={key.x + 10}
          y={key.y + 35}
          fontFamily="Verdana"
          fontSize="10"
          fill={check ? "white" : "#2c3e50"}
        >
          ${bedroom.rent}
          /mo.
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

export default connect(
  mapStateToProps,
  null
)(Bedroom);
