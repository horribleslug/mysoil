import React, { Component } from 'react';
import Garden from './Components/Garden';
import Data from './Components/Data';
import './App.css';


class App extends Component {
  constructor() {
      super();

      this.state = {
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

  getWeather = async (e) => {

  e.preventDefault();

  // const city = "Vancouver";
  // const country = "Canada";
  const cityid = 6173331;
  const Api_key = "2926b160c0bbfab56e181013c8308ab0";

  // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_key}`);
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${Api_key}`);
  const response = await api_call.json();


    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    })

    console.log(response);

  }



  render() {
    return (
      <div className="App">
        <Garden garden={this.state.gardens[0]} users={this.state.users}/>
        <Data/>
      </div>
    );
  }
}



export default App;
// <button onClick={this.getWeather} />
