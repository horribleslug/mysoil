import React, { Component } from 'react';
import { Chart } from "react-charts";

class PlotPage extends Component {
  render() {
    let plant = this.props.data.plant;
    var waterLevels = this.props.data.waterlevels;
    var lineChart = (
      // A react-chart hyper-responsively and continuusly fills the available
      // space of its parent element automatically
      <div
        style={{
          width: "500px",
          height: "300px"
        }}
      >
        <Chart
          data={[
            {
              label: "Series 1",
              data: [[0, waterLevels[0]], [1, waterLevels[1]],
              [2, waterLevels[2]], [3, waterLevels[3]]]
            }
          ]}
          axes={[
            { primary: true, type: "linear", position: "bottom" },
            { type: "linear", position: "left" }
          ]}
        />
      </div>
    );
    if (plant){
      return (
        <div>
        <h1>{plant.charAt(0).toUpperCase() + plant.slice(1)}</h1>
          <img className="plotimg" src={require("../Assets/" + plant + ".png")} alt={plant} />
          {lineChart}
        </div>
      );
    } else {

      return (
        <h1>Plot</h1>
      );

    }
  }
}

export default PlotPage;
