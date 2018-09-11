import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./App.css";

import FilterBox from "./components/FilterBox/FilterBox";
import FloorPlan from "./components/FloorPlan/FloorPlan";

import { apartments } from "./database/apartments";

import { getApartments } from "./actions/apartments";
import { setCurrentApartment } from "./actions/apartments";

class App extends Component {
  componentDidMount = () => {
    this.props.getApartments(apartments);
    this.props.setCurrentApartment(1);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.apartments.length ? (
            <Fragment>
              <FilterBox />
              <FloorPlan />
            </Fragment>
          ) : (
            <div className="col-1">Loading GIF</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  apartments: state.apartments.apartments
});

const mapDispatchToProps = dispatch => ({
  getApartments: apartments => dispatch(getApartments(apartments)),
  setCurrentApartment: id => dispatch(setCurrentApartment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
