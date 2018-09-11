import React, { Component, Fragment } from "react";
import "./FloorPlan.css";
import { connect } from "react-redux";

import Bedroom from "./Bedroom";
// import HoverCard from "./HoverCard";

import { furnitureRects } from "../../database/apartments";

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
        className="svg-apartment-wall"
        x="135"
        y="65"
        width="200"
        height="170"
        stroke="black"
        fill="transparent"
        strokeWidth="1"
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
        className="svg-furniture"
        key={rect.name}
        x={rect.x}
        y={rect.y}
        rx={rect.rx}
        ry={rect.ry}
        width={rect.width}
        height={rect.height}
        stroke="black"
        fill="transparent"
        strokeWidth="1"
      />
    );
  };

  drawLine = (line, shapesArray) => {
    shapesArray.push(
      <line
        className="svg-furniture"
        key={line.name}
        x1={line.x1}
        x2={line.x2}
        y1={line.y1}
        y2={line.y2}
        stroke="black"
        strokeWidth="1"
      />
    );
  };

  drawCircle = (circ, shapesArray) => {
    shapesArray.push(
      <circle
        className="svg-furniture"
        key={circ.name}
        cx={circ.cx}
        cy={circ.cy}
        r={circ.r}
        stroke="black"
        strokeWidth="1"
        fill="transparent"
      />
    );
  };

  drawInstructions = () => {
    const startX = 210;
    const startY = 20;
    return (
      <Fragment>
        <rect
          className="key-avail"
          x={startX}
          y={startY}
          width="20"
          height="20"
          stroke="black"
          fill="#334e6980"
          strokeWidth="1"
        />
        <text
          className="key-text"
          x={startX + 25}
          y={startY + 13}
          fontSize="10"
          fill="black"
        >
          Available
        </text>
        <rect
          className="key-unavail"
          x={startX + 100}
          y={startY}
          width="20"
          height="20"
          stroke="black"
          fill="transparent"
          strokeWidth="1"
        />
        <text
          className="key-text"
          x={startX + 125}
          y={startY + 13}
          fontSize="10"
          fill="black"
        >
          Not Available
        </text>
      </Fragment>
    );
  };

  render() {
    return (
      <div className="col-2">
        <svg className="floorplan-svg" viewBox="0 0 500 250">
          {this.drawBedrooms()}
          {this.drawApartment()}
          {this.drawFurniture()}
          {this.drawInstructions()}
        </svg>
        {/* <HoverCard /> */}
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
