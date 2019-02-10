import React, { Component } from 'react';
import Garden from './Garden'

class HomePage extends Component {


    constructor() {
        super();

        this.state = {
          tasks: [
            {
              user: "Jake Paul",
              name: "Water",
            },
            {
              user: "Jon Kim",
              name: "Harvest",
            },
            {
              user: "Vandy Liu",
              name: "Weed",
            },
            {
              user: "Brandy Qiu",
              name: "Prune",
            },
          ],
          users: [
            {
              name: "Jake Paul",
            },
            {
              name: "Jon Kim",
            },
            {
              name: "Vandy Liu",
            },
            {
              name: "Brandy Qiu",
            },
          ],
          gardens: [
            {
              name: "Kerrisdale South",
              lat: "420",
              lon: "69",
              plots: [
                {
                  id: 1,
                  plant: "tomato",
                  water: 7,
                  date: "01/01/2019"
                },
                {
                  id: 2,
                  plant: "corn",
                  water: 2,
                  date: "01/01/2019"
                },
                {
                  id: 3,
                  plant: "eggplant",
                  water: 3,
                  date: "01/01/2019"
                },
                {
                  id: 4,
                  plant: "carrot",
                  water: 7,
                  date: "01/01/2019"
                },
                {
                  id: 4,
                  plant: "carrot",
                  water: 7,
                  date: "01/01/2019"
                },
                {
                  id: 4,
                  plant: "carrot",
                  water: 7,
                  date: "01/01/2019"
                },
                {
                  id: 4,
                  plant: "carrot",
                  water: 7,
                  date: "01/01/2019"
                },
                {
                  id: 4,
                  plant: "carrot",
                  water: 7,
                  date: "01/01/2019"
                },
                {
                  id: 4,
                  plant: "carrot",
                  water: 7,
                  date: "01/01/2019"
                },
                {
                  id: 4,
                  plant: "carrot",
                  water: 7,
                  date: "01/01/2019"
                },

              ]
            }
          ],
        }
    }

  render() {
    return (
      <div className="App">
        <Garden garden={this.state.gardens[0]} users={this.state.users} tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default HomePage;
