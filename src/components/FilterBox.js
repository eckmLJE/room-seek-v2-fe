import React from "react";
import { connect } from "react-redux";

import { setCurrentApartment } from "../actions/apartments";
import { setRentFilter } from "../actions/filters";
import { setMonthsFilter } from "../actions/filters";
import { setPetFilter } from "../actions/filters";

const FilterBox = props => {
  return (
    <div className="col-1">
      <div className="apt-buttons">
        <button />
        <button />
      </div>
      <div className="filters">
        <select onChange={e => props.setRentFilter(e.target.value)}>
          <option value="1500">1500 or Less</option>
          <option value="1250">1250 or Less</option>
          <option value="1000">1000 or Less</option>
        </select>
        <br />
        <select onChange={e => props.setMonthsFilter(e.target.value)}>
          <option value="6">Within 6 Months</option>
          <option value="3">Within 3 Months</option>
          <option value="1">Within 1 Month</option>
        </select>
        <br />
        <select onChange={e => props.setPetFilter(e.target.value)}>
          <option value="true">Pet Friendly</option>
          <option value="false">Not Pet Friendly</option>
        </select>
      </div>
    </div>
  );
};

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
