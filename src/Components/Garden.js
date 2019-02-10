import React, { Component } from 'react';
import Plot from './Plot'
import Profile from './Profile'
// import Task from './Task'

class Garden extends Component {

  handleToggle = (plant) => {
    this.props.toggle(plant);
  }

    render() {
      let data = this.props.data;
      // let gard = this.props.data.currentGarden;
      console.log(data);
      let plots
      // if(data.gardens[0].plots){
      //   plots = data.gardens[0].plots.map(plot => {
      //     return (
      //         <Plot key={plot.id} params={plot} toggle={this.handleToggle.bind()}/>
      //     );
      //   });
      // }
      if(data.gardenData.plots){
        plots = data.gardenData.plots.map(plot => {
          return (
              <Plot key={plot.id} params={plot} toggle={this.handleToggle.bind()}/>
          );
        });
      }
      let users
      if(data.users){
        users = data.users.map(user => {
          return (
              <Profile key={user.name} params={user} />
          );
        });
      }

      return (
        <div className="Garden">
          <h1>{data.gardenData.name}</h1>

          <h2>Plots</h2>
          <div className="Plots">
            {plots}
          </div>

          <h2>People</h2>
          <div className="People">
            {users}
          </div>
        </div>
      );
    }
}
export default Garden;
