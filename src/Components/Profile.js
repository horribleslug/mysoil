import React, { Component } from 'react';

class Profile extends Component {


  render() {
    let user = this.props.params;
    return (
      <div className="carouselItem">
        <img className="profileimg" src={require("../Assets/boy.png")} alt={user.name} />
      </div>
    );
  }
}

export default Profile;
