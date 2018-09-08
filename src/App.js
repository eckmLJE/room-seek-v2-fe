import React, { Component } from "react";
import "./App.css";

import HeaderBar from "./components/HeaderBar";
import FilterBox from "./components/FilterBox";
import FloorPlan from "./components/FloorPlan";

class App extends Component {
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

export default App;
