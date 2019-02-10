import React, { Component } from 'react';

class GardenItem extends Component {

  handleClickGarden = () => {
    this.props.click(this.props.params.id);
  }

  render() {
    let garden = this.props.params;
    return (
      <div className="carouselItem" onClick={this.handleClickGarden}>
        <h2>{garden.name}</h2>
      </div>
    );
  }
}

export default GardenItem;
