import React, { Component } from 'react';
import Plot from './Plot'
import Profile from './Profile'

class Garden extends Component {
    constructor () {
      super()
      this.state = { disable: false }
    }

    toggleDisable = () => this.setState(prevState => ({disable: !prevState.disable}))

    render() {
      let plots
      if(this.props.garden.plots){
        plots = this.props.garden.plots.map(plot => {
          return (
              <Plot key={plot.id} params={plot} />
          );
        });
      }
      let users
      if(this.props.users){
        users = this.props.users.map(user => {
          return (
              <Profile key={user.name} params={user} />
          );
        });
      }
      return (
        <div className="Garden">
          <h1>{this.props.garden.name}</h1>

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
