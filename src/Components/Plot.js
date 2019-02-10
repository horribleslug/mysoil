import React, { Component } from 'react';

class Plot extends Component {

  handleToggle = () => {
    this.props.toggle(this.props.params.plant);
    console.log(this.props.params.plant);
  }

  render() {
    let params=this.props.params;
    return (
      <div className="carouselItem" onClick={this.handleToggle}>
        <img className="plotimg" src={require("../Assets/" + params.plant + ".png")} alt={params.plant} />
      </div>
    );
  }
}

export default Plot;
