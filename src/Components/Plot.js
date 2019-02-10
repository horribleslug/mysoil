import React, { Component } from 'react';

class Garden extends Component {


  render() {
    console.log(this.props.params);
    return (
      <div>
        <p>
          plot
        </p>
      </div>
    );
  }
}

export default Garden;
