import React, { Component } from 'react';

class Garden extends Component {


  render() {
    let params = this.props.params;
    return (
      <div className="carouselItem">
        <img className="plotimg" src={require("../Assets/" + params.plant + ".png")} alt={params.plant} />
      </div>
    );
  }
}

export default Garden;
