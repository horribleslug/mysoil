import React, {Component} from "react";
import { Chart } from "react-charts";

class Data extends Component {

    render(){
      var lineChart = (
        // A react-chart hyper-responsively and continuusly fills the available
        // space of its parent element automatically
        <div
          style={{
            width: "400px",
            height: "300px"
          }}
        >
          <Chart
            data={[
              {
                label: "Series 1",
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
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
