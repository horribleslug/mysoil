import React, { Component } from 'react';
import GardenItem from './GardenItem';

class CityPage extends Component {

    handleClick = (garden) => {
      this.props.click(garden);
    }

  render() {

    let gardens;
    if(this.props.data){
      gardens = this.props.data.map(garden => {
        return (
            <GardenItem key={garden.name} params={garden} click={this.handleClick.bind()}/>
        );
      });
    }

      return (
        <div>
          <h1>Vancouver</h1>
          <div className="div-map">
            <img className="Map" src={require("../Assets/map.png")} alt="map"/>
          </div>
          <div>
            {gardens}
          </div>
        </div>
      );
    }
  }

export default CityPage;
