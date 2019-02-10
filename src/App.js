import React, { Component } from 'react';
import PlotPage from './Components/PlotPage';
import HomePage from './Components/HomePage';
import './App.css';
import { HashRouter, Route } from 'react-router-dom'

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
  // render() {
  //   return (
  //     <div className="App">
  //       <Garden garden={this.state.gardens[0]} users={this.state.users} tasks={this.state.tasks}/>
  //     </div>
  //   );
  // }
    render(){
      return(
      <HashRouter>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/plot" component={PlotPage} />
        </div>
      </HashRouter>
      )
    }

}

export default App;
// <button onClick={this.getWeather} />
