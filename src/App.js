import React, { Component } from 'react';
<<<<<<< HEAD
import Garden from './Components/Garden';
import Data from './Components/Data';
import PlotPage from './Components/PlotPage'
=======
import PlotPage from './Components/PlotPage';
import HomePage from './Components/HomePage';
>>>>>>> 74d2e47e878bff1532bbea2e0c2b09f0e0394e54
import './App.css';


class App extends Component {

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
    render(){
      return(
      <HomePage />
      )
    }

<<<<<<< HEAD


  render() {
    return (
      <div className="App">
        <Garden garden={this.state.gardens[0]} users={this.state.users}/>
        <PlotPage plots={this.state.plots} weather={this.state.weather} needsWater={this.state.needsWater}/>
        <Data/>
      </div>
    );
  }
=======
>>>>>>> 74d2e47e878bff1532bbea2e0c2b09f0e0394e54
}



export default App;
// <button onClick={this.getWeather} />
