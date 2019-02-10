import React, { Component } from 'react';

class PlotPage extends Component {


  render() {
    let plant = this.props.data.plant;
    if (plant){
      return (
        <div>
        <h1>{plant}</h1>
          <img className="plotimg" src={require("../Assets/" + plant + ".png")} alt={plant} />
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
