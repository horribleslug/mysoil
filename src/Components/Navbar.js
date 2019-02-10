import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {


  render() {
    return (
      <div className="Navbar">
          <Link to="/">HOME</Link>
          <Link to="/plot">PLOT</Link>
      </div>
    );
  }
}

export default Navbar;
