import React, { Component } from 'react';

class Task extends Component {


  render() {
    let params = this.props.params;
    return (
      <div className="carouselItem">
        <p>{params.name}</p>

      </div>
    );
  }
}

export default Task;
