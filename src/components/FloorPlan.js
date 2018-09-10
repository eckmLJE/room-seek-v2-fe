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

  drawFurniture = () => {
    let shapesArray = [];
    furnitureRects.forEach(piece =>
      piece.shapes.forEach(shape => {
        switch (shape.type) {
          case "rectangle":
            this.drawRect(shape, shapesArray);
            break;
          case "line":
            this.drawLine(shape, shapesArray);
            break;
          case "circle":
            this.drawCircle(shape, shapesArray);
            break;
          default:
            console.log("default reached");
        }
      })
    );
    return shapesArray;
  };

  drawRect = (rect, shapesArray) => {
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
    console.log("rectangle drawn");
  };

  drawLine = (line, shapesArray) => {
    shapesArray.push(
      <line
        key={line.name}
        x1={line.x1}
        x2={line.x2}
        y1={line.y1}
        y2={line.y2}
        stroke="black"
        strokeWidth="1.25"
      />
    );
    console.log("line drawn");
  };

  drawCircle = (circ, shapesArray) => {
    shapesArray.push(
      <circle
        key={circ.name}
        cx={circ.cx}
        xy={circ.cy}
        r={circ.r}
        stroke="black"
        strokeWidth="1"
        fill="transparent"
      />
    );
    console.log("circle drawn");
  };

  render() {
    return (
      <div className="col-2">
        <svg className="floorplan-svg" viewBox="0 0 500 250">
          {this.drawBedrooms()}
          {this.drawApartment()}
          {this.drawFurniture()}
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
