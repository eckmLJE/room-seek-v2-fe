import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import HeaderBar from "./components/HeaderBar";
import FilterBox from "./components/FilterBox";
import FloorPlan from "./components/FloorPlan";

import { setApartments } from "./actions/apartments";
import { apartments } from "./database/apartments";

class App extends Component {
  componentDidMount = () => {
    this.props.setApartments(apartments);
  };

  render() {
    return (
      <div className="container">
        <HeaderBar />
        <div className="row">
          <FilterBox />
          <FloorPlan />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   apartments: state.apartments
// });

const mapDispatchToProps = dispatch => ({
  setApartments: apartments => dispatch(setApartments(apartments))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
