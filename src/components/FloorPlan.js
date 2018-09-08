import React, { Component } from "react";
import { connect } from "react-redux";

import Bedroom from "./floorplan/Bedroom";

class FloorPlan extends Component {
  state = { svgBedrooms: [] };

  componentDidMount = () => this.storeBedrooms();

  storeBedrooms = () => {
    let svgBedrooms = [];
    let xOffset = 0;
    console.log(this.props.apartments);
    const currentApartment = this.props.apartments.find(
      apartment => apartment.id === this.props.currentApartment
    );
    console.log(currentApartment);
    currentApartment.bedrooms.forEach(bedroom => {
      svgBedrooms.push(<Bedroom xOffset={xOffset} id={bedroom.name} />);
      xOffset = xOffset + 60;
    });
    this.setState({ svgBedrooms: svgBedrooms });
  };

  render() {
    console.log(this.state.svgBedrooms);
    return (
      <div className="col-2">
        <svg viewBox="0 0 500 300">{this.state.svgBedrooms}</svg>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  apartments: state.apartments.apartments,
  currentApartment: state.apartments.currentApartment
});

// const mapDispatchToProps = dispatch => ({
//   getApartments: apartments => dispatch(getApartments(apartments))
// });

export default connect(
  mapStateToProps,
  null
)(FloorPlan);
