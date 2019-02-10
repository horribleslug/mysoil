import React, { Component } from 'react';
import Garden from './Components/Garden';
import PlotPage from './Components/PlotPage';
import CityPage from './Components/CityPage';
import SignIn from './Components/SignIn';
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

  	var newUsers = [];
  	const newState = [];
    var gID = 'z';
  	db.collection("gardens").get().then((snapshot) => {
	  	snapshot.docs.forEach(doc => {
	  		var newplots = [];
        console.log(doc.data().people);
        newUsers = doc.data().people;
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
    // console.log(gID);
  	db.collection("gardens/"+gID+"/people").get().then((snapshot) => {
  		snapshot.docs.forEach(doc => {
  			// newUsers.push({
  			// 	id: doc.id,
  			// 	name: doc.data().name,
  			// });
  			//console.log(newUsers);
  		});
	  	this.setState({
      users: newUsers,
			gardens: newState
		});
  	});
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitGarden = this.handleSubmitGarden.bind(this);
    this.handleSubmitPerson = this.handleSubmitPerson.bind(this);
    this.handleSubmitGardenID = this.handleSubmitGardenID.bind(this);
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
          showCity: !bool,
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

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmitGarden(e) {
    e.preventDefault();
    const db = firebase.firestore();
    const itemsRef = db.collection("gardens").add({
      name: this.state.gardenName,
      location: this.state.gardenLocation.split(',')
    });
    // make gardenID the newly added garden
    console.log(itemsRef);
  }

  handleSubmitPerson(e) {
    e.preventDefault();
    const db = firebase.firestore();
    if (this.state.gardenID === '')
      return;
    const itemsRef = db.collection("gardens/"+this.state.gardenID+"/people").add({
      name: this.state.user,
    });
    // make gardenID the newly added garden
    console.log(itemsRef);
  }

  handleSubmitGardenID(e) {
    e.preventDefault();
  }

  handleLogIn() {
    console.log('loggedin');
  }

    render(){
      return(
        <div>
          <div className="App">
            <img onClick = {this._showMessage.bind(null, true)} className="icon" src={require("./Assets/home.png")} alt={"home"} />
            {this.state.showCity && (<CityPage data={this.state.gardens} toggle={this.handleToggle}/>)}
            {this.state.showHome && (<Garden data={this.state} toggle={this.handleToggle}/>)}
            {this.state.showPlot && (<PlotPage data={this.state} toggle={this.handleToggle}/>)}
            <SignIn status={this.handleLogIn}/>


          </div>
        </div>

      )

    }

}

export default App;
// <button onClick={this.getWeather} />
