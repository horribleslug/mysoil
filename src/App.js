import React, { Component } from 'react';
import Garden from './Components/Garden';
import Data from './Components/Data';
import './App.css';


class App extends Component {
  constructor() {
      super();

      this.state = {
        users: [],
        gardens: [
          {
            name: "Kerrisdale South",
            lat: "420",
            lon: "69",
            plots: [

              {
                id: 1,
                plants: [
                  {
                    name: "tomato",
                    water: 7,
                    date: "01/01/2019"
                  },
                  {
                    name: "corn",
                    water: 1,
                    date: "01/02/2019"
                  },
                  {
                    name: "eggplant",
                    water: 3,
                    date: "01/03/2019"
                  },
                ]
              },

              {
                id: 2,
                plants: [
                  {
                    name: "grape",
                    water: 7,
                    date: "01/01/2019"
                  },
                  {
                    name: "zuchini",
                    water: 11,
                    date: "01/02/2019"
                  },
                  {
                    name: "eggplant",
                    water: 8,
                    date: "01/05/2019"
                  },
                ]
              }
            ]
          }
        ],
      }
  }


  render() {
    return (
      <div className="App">
        <Garden garden={this.state.gardens[0]}/>
        <Data/>
      </div>
    );
  }
}



export default App;
