import React, { Component } from 'react';
import Plot from './Plot'

class Garden extends Component {

    render() {
      let plots
      if(this.props.garden.plots){
        plots = this.props.garden.plots.map(plot => {
          return (
            <div key={plot.id} >
              <Plot params={plot} />
            </div>
          );
        });
      }
      return (
        <div className="Garden">
          <h1>{this.props.garden.name}</h1>
          <h3>Plots</h3>
          {plots}
        </div>
      );
    }
}
export default Garden;
