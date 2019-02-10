import React, { Component } from 'react';
import Garden from './Components/Garden';
import PlotPage from './Components/PlotPage';
import './App.css';
import firebase from './Components/firebase.js';

class App extends Component {
  constructor() {
  	const db = firebase.firestore();
  	super();
  	this.state = {
  		user: '',
  		gardenID: '',
  		gardenName: '',
  		gardenLocation: '',
  		task: '',
  		users: [],
  		gardens: []
  	}

  	const newUsers = [];
  	const newState = [];
  	db.collection("gardens").get().then((snapshot) => {
	  	snapshot.docs.forEach(doc => {
	  		var newplots = [];

	  		db.collection('gardens/' + doc.id + '/plots').get().then((plot) => {
	  			plot.docs.forEach(info => {
	  				newplots.push({
	  					id: info.id,
	  					date: info.data().date,
	  					plant: info.data().plant,
	  					water: info.data().water
	  				});
	  			})
	  		});

	  		newState.push({
	  			id: doc.id,
	  			name: doc.data().name,
	  			location: doc.data().location,
	  			people: doc.data().people,
	  			tasks: doc.data().tasks,
	  			plots: newplots
	  		});
	  	});

	  });
  	db.collection("users").get().then((snapshot) => {
  		snapshot.docs.forEach(doc => {
  			newUsers.push({
  				id: doc.id,
  				name: doc.data().name,
  			});
  			console.log(newUsers);
  		});
	  	this.setState({
			users: newUsers,
			gardens: newState
		});
  	});
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

  _showMessage = (bool) => {
      this.setState({
          showHome: bool,
          showPlot: !bool,
      })
  }

  handleToggle = (plant) => {
      this.setState({
          showHome: !this.state.showHome,
          showPlot: !this.state.showPlot,
      })
      if(plant){
        this.setState({
          plant: plant
        })
      }
  }

    render(){
      return(
        <div className="App">
          <button className="Nav-button" onClick = {this._showMessage.bind(null, true)} >Enter</button>
          {this.state.showHome && (<Garden data={this.state} toggle={this.handleToggle}/>)}
          {this.state.showPlot && (<PlotPage data={this.state} toggle={this.handleToggle}/>)}
        </div>
      )

    }

}

export default App;
// <button onClick={this.getWeather} />
