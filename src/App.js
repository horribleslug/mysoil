import React, { Component } from 'react';
import PlotPage from './Components/PlotPage';
import HomePage from './Components/HomePage';
import './App.css';

import ReactDOM from 'react-dom';
import { OpenWeatherMap } from 'react-weather';

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

}

ReactDOM.render(
  <OpenWeatherMap city="Vancouver" country="CA" appid="2926b160c0bbfab56e181013c8308ab0" />,
  document.getElementById('root')
)


export default App;
// <button onClick={this.getWeather} />
