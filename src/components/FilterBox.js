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
          <button name="1" />
          <button name="2" />
          <button name="3" />
          <button name="4" />
        </div>
        <div className="filters">
          <select onChange={e => this.props.setRentFilter(e.target.value)}>
            <option value="1500">1500 or Less</option>
            <option value="1250">1250 or Less</option>
            <option value="1000">1000 or Less</option>
          </select>
          <br />
          <select onChange={e => this.props.setMonthsFilter(e.target.value)}>
            <option value="6">Within 6 Months</option>
            <option value="3">Within 3 Months</option>
            <option value="1">Within 1 Month</option>
          </select>
          <br />
          <select onChange={e => this.props.setPetFilter(e.target.value)}>
            <option value="true">Pet Friendly</option>
            <option value="false">Not Pet Friendly</option>
          </select>
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
