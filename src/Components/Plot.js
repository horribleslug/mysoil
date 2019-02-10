import React, { Component } from 'react';

class Garden extends Component {

  handleToggle = () => {
    this.props.toggle();
  }

  render() {
    let params = this.props.params;
    return (
      <div className="carouselItem">
        <img className="plotimg" src={require("../Assets/" + params.plant + ".png")} alt={params.plant} />
        <button onClick={this.handleToggle.bind(params.plant)}>yeet</button>
      </div>
    );
  }
}

export default Garden;
