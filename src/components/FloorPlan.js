import React, { Component } from "react";
import { connect } from "react-redux";

import Bedroom from "./floorplan/Bedroom";
import { furnitureRects } from "../database/apartments";

class FloorPlan extends Component {
  drawBedrooms = () => {
    let svgBedrooms = [];
    this.props.currentBedrooms.forEach(bedroom => {
      svgBedrooms.push(<Bedroom bedroom={bedroom} key={bedroom.name} />);
    });
    return svgBedrooms;
  };

  drawApartment = () => {
    return (
      <rect
        x="135"
        y="65"
        width="200"
        height="170"
        stroke="black"
        fill="transparent"
        strokeWidth="2"
      />
    );
  };

  drawFurnitureRects = () => {
    let shapesArray = [];
    furnitureRects.forEach(piece =>
      piece.shapes.forEach(rect => {
        shapesArray.push(
          <rect
            key={rect.name}
            x={rect.x}
            y={rect.y}
            rx={rect.rx}
            ry={rect.ry}
            width={rect.width}
            height={rect.height}
            stroke="black"
            fill="transparent"
            strokeWidth="1.25"
          />
        );
      })
    );
    return shapesArray;
  };

  render() {
    return (
      <div className="col-2">
        <svg className="floorplan-svg" viewBox="0 0 500 250">
          {this.drawBedrooms()}
          {this.drawApartment()}
          {this.drawFurnitureRects()}
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
