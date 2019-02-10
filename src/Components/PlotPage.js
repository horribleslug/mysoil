import React, { Component } from 'react';
import { Chart } from "react-charts";

class PlotPage extends Component {
  render() {
    let plant = this.props.data.plant;
    var lineChart = (
      // A react-chart hyper-responsively and continuusly fills the available
      // space of its parent element automatically
      <div
        style={{
          width: "600px",
          height: "300px"
        }}
      >
        <Chart
          data={[
            {
              label: "Series 1",
              data: [[0, 79], [1, 74], [2, 60], [3, 57], [4, 54], [5, 53]]
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
        <h1>{plant}</h1>
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
