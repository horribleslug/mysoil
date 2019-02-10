import React, { Component } from 'react';

class Garden extends Component {


  render() {
    console.log(this.props.garden);
    return (
      <div>
        <h1>
        {this.props.garden.name}
        </h1>
      </div>
    );
  }
}

export default Garden;
