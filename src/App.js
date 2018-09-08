import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./App.css";

import HeaderBar from "./components/HeaderBar";
import FilterBox from "./components/FilterBox";
import FloorPlan from "./components/FloorPlan";

import { getApartments } from "./actions/apartments";
import { apartments } from "./database/apartments";

class App extends Component {
  componentDidMount = () => {
    this.props.getApartments(apartments);
  };

  render() {
    return (
      <div className="container">
        <HeaderBar />
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
  getApartments: apartments => dispatch(getApartments(apartments))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
