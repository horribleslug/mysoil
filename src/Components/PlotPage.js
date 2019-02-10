<<<<<<< HEAD
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
=======
import React, { Component } from 'react';

class PlotPage extends Component {


  render() {
    return (
      <h1>Plot</h1>
    );
  }
}

export default PlotPage;
>>>>>>> 74d2e47e878bff1532bbea2e0c2b09f0e0394e54
