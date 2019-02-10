import React, {Component} from "react";
import { Chart } from "react-charts";

class Data extends Component {

    render(){
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
                data: [[0, 79], [1, 74], [2, 60], [3, 57], [4, 54], [5, 53], [6, 52]]
              }
            ]}
            axes={[
              { primary: true, type: "linear", position: "bottom" },
              { type: "linear", position: "left" }
            ]}
          />
        </div>
      );

      return (
        <div> {lineChart} </div>
      );
    }


}

export default Data;
