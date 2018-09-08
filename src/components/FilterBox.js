import React from "react";
import { connect } from "react-redux";

import { setCurrentApartment } from "../actions/apartments";

const FilterBox = () => {
  return (
    <div className="col-1">
      <div className="apt-buttons">
        <button />
        <button />
      </div>
      <div className="filters">
        <select style={{ width: "80%" }} />
        <select style={{ width: "80%" }} />
        <select style={{ width: "80%" }} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  apartments: state.apartments.apartments
});

const mapDispatchToProps = dispatch => ({
  setCurrentApartment: apartmentId => dispatch(setCurrentApartment(apartmentId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBox);
