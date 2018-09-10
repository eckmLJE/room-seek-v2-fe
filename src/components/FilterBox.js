import React, { Component } from "react";
import { connect } from "react-redux";

import { setCurrentApartment } from "../actions/apartments";
import { setRentFilter } from "../actions/filters";
import { setMonthsFilter } from "../actions/filters";
import { setPetFilter } from "../actions/filters";

class FilterBox extends Component {
  handleAptClick = e => {
    e.preventDefault();
    const id = parseInt(e.target.name, 10);
    this.props.setCurrentApartment(id);
  };

  render() {
    return (
      <div className="col-1">
        <div className="apt-buttons" onClick={this.handleAptClick}>
          <button name="1">1</button>
          <button name="2">2</button>
          <button name="3">3</button>
          <button name="4">4</button>
        </div>
        <div className="filters">
          <div className="select-box box-1">
            <select onChange={e => this.props.setRentFilter(e.target.value)}>
              <option value="1500">$1,500 or Less</option>
              <option value="1250">$1,250 or Less</option>
              <option value="1000">$1,000 or Less</option>
            </select>
          </div>
          <div className="select-box box-2">
            <select onChange={e => this.props.setMonthsFilter(e.target.value)}>
              <option value="6">Within 6 Months</option>
              <option value="3">Within 3 Months</option>
              <option value="1">Within 1 Month</option>
            </select>
          </div>
          <div className="select-box box-3">
            <select onChange={e => this.props.setPetFilter(e.target.value)}>
              <option value="true">Pet Friendly</option>
              <option value="false">Not Pet Friendly</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  apartments: state.apartments.apartments
});

const mapDispatchToProps = dispatch => ({
  setCurrentApartment: apartmentId =>
    dispatch(setCurrentApartment(apartmentId)),
  setRentFilter: rent => dispatch(setRentFilter(rent)),
  setMonthsFilter: months => dispatch(setMonthsFilter(months)),
  setPetFilter: bool => dispatch(setPetFilter(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBox);
