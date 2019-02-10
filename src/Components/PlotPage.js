import React, { Component } from 'react';
import { Chart } from "react-charts";

class PlotPage extends Component {
  render() {
    let plant = this.props.data.plant;
    var waterLevels = this.props.data.waterlevels;
    var lineChart = (
      <div
        style={{
          margin: "auto",
          width: "300px",
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
    var waterCoefficient = 1;
     if (plant === "corn" || plant === "eggplant")
       waterCoefficient = 1;
     else if (plant === "carrot" || plant === "broccoli")
       waterCoefficient = 0.65;
     else if (plant === "tomato")
       waterCoefficient = 0.75;
     else if (plant === "wheat")
       waterCoefficient = 1.2;
     var watermessage = '';
     var daysToNextWater = 0;
     if (waterLevels[3] < 35) {
       daysToNextWater = 0;
       watermessage = "Need watering!"
     } else {
       daysToNextWater = (Math.round(waterCoefficient*10*(waterLevels[3]*0.1-3)))/10;
       watermessage = "Water in " + daysToNextWater + " days!"
     }
    if (plant){
      return (
        <div>
        <h1>{plant.charAt(0).toUpperCase() + plant.slice(1)}</h1>

         <img className="plotimg" src={require("../Assets/" + plant + ".png")} alt={plant} />
         <h1>{watermessage}</h1>
         {lineChart}
         <br/>
         <iframe id="forecast_embed" frameborder="0" height="200" width="80%" src="//forecast.io/embed/#lat=49.1666&lon=123.1336&name=Vancouver"></iframe>
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
