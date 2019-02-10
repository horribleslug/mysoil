import React, { Component } from 'react';
import Plot from './Plot'
import Profile from './Profile'

class PlotPage extends Component {
  constructor () {
    super()
    this.state = { disable: false }
  }

  toggleDisable = () => this.setState(prevState => ({disable: !prevState.disable}))

  render() {
    let plots
    if(this.props.plots){
      plots = this.props.plots.map(plot => {
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
      <div>
        {"yes"}
      </div>
    );
  }
}
export default PlotPage;
