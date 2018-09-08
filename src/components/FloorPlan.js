import React, { Component } from "react";
import { connect } from "react-redux";

import Bedroom from "./floorplan/Bedroom";

class FloorPlan extends Component {
  drawBedrooms = () => {
    let svgBedrooms = [];
    let xOffset = 10;
    this.props.currentBedrooms.forEach(bedroom => {
      svgBedrooms.push(
        <Bedroom
          bedroom={bedroom}
          xOffset={xOffset}
          id={bedroom.name}
          key={bedroom.name}
        />
      );
      xOffset = xOffset + 80;
    });
    return svgBedrooms;
  };

  render() {
    return (
      <div className="col-2">
        <svg className="floorplan-svg" viewBox="0 0 500 300">
          {this.drawBedrooms()}
        </svg>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  apartments: state.apartments.apartments,
  currentApartment: state.apartments.currentApartment,
  currentBedrooms: state.apartments.currentBedrooms
});

// const mapDispatchToProps = dispatch => ({
//   getApartments: apartments => dispatch(getApartments(apartments))
// });

export default connect(
  mapStateToProps,
  null
)(FloorPlan);
