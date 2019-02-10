import React, { Component } from 'react';
import Garden from './Components/Garden';
import PlotPage from './Components/PlotPage';
import SignIn from './Components/SignIn';
import CityPage from './Components/CityPage';
import './App.css';
import firebase from './Components/firebase.js';

var waterLevels = [];
class App extends Component {
  constructor() {
  	const db = firebase.firestore();
  	super();
  	this.state = {
      logo: "logo-big",
      currentGarden: '',
      showSignIn: true,
  		user: '',
  		plotID: '',
  		gardenID: 'LoobbVOv92bX9AUKaT74', //change
  		gardenName: '',
  		gardenLocation: '',
  		task: '',
  		users: [],
  		gardens: [],
  		waterlevels: []
  	}

  	var newUsers = [];
  	const newState = [];
    var gID = 'z';
  	db.collection("gardens").get().then((snapshot) => {
	  	snapshot.docs.forEach(doc => {
	  		var newplots = [];
        // console.log(doc.data().people);
        newUsers = doc.data().people;
	  		db.collection('gardens/' + doc.id + '/plots').get().then((plot) => {
	  			plot.docs.forEach(info => {
	  				newplots.push({
	  					id: info.id,
	  					date: info.data().date,
	  					plant: info.data().plant,
	  					water: info.data().water,
	  				});
            waterLevels = info.data().soilMoisture;
            // waterLevels = waterLevels;
            // console.log(waterLevels);
	  			})
	  		});

	  		newState.push({
	  			id: doc.id,
	  			name: doc.data().name,
	  			location: doc.data().location,
	  			//users: doc.data().people,
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


  handleToggle = (plant) => {
      this.setState({
          showHome: !this.state.showHome,
          showPlot: !this.state.showPlot,
      })
      if(plant){
        const db = firebase.firestore();
	    db.collection("gardens/"+this.state.gardenID+"/plots").get().then((snapshot) => {
	      snapshot.docs.forEach(doc => {
	        if (this.state.plant === doc.data().plant) {
	          console.log(doc.data().soilMoisture);
	          this.setState({
	            plotID: doc.id,
	            waterlevels: doc.data().soilMoisture
	          });
	        }
	      })
	    })
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

  handleLogIn = (displayName) => {
    if(displayName === "logout"){
      this.setState({
        showMenu: false,
        logo: "logo-big"
      });
    } else {
    this.setState({
      showMenu: true,
      logo: "logo-small"
    });

    }
  }
    handleGardenClick = (garden) => {
        this.setState({
            showHome: true,
            showPlot: false,
            showCity: false,
            showSignIn: false,
        })

    }

  cityClick = () => {
    this.setState({
      showSignIn: false,
      showHome: false,
      showPlot: false,
      showCity: true,
    })
  }
    menuClick = () => {
      this.setState({
        showSignIn: true,
        showHome: false,
        showCity: false,
        showPlot: false,
      })
    }

    render(){
      return(
        <div>
          <div className="App">
          <img className={this.state.logo} src={require("./Assets/logo.png")} alt="logo"/>
            <br/>
            {this.state.showMenu && <img onClick = {this.cityClick} className="icon" src={require("./Assets/city.png")} alt={"city"} />}
            {this.state.showMenu && <img onClick = {this.menuClick} className="icon" src={require("./Assets/home.png")} alt={"home"} />}
            {this.state.showSignIn && <SignIn status={this.handleLogIn}/>}
            {this.state.showCity && (<CityPage data={this.state.gardens} click={this.handleGardenClick}/>)}
            {this.state.showHome && (<Garden data={this.state} toggle={this.handleToggle}/>)}
            {this.state.showPlot && (<PlotPage water={waterLevels} data={this.state} />)}
          </div>
        </div>

      )
    }
}




export default App;
// <button onClick={this.getWeather} />
//          <OpenWeatherMap city="Vancouver" country="CA" appid="2926b160c0bbfab56e181013c8308ab0"/>



// <div className="test">
//   <form onSubmit ={this.handleSubmitGarden}>
//     <input type="text" name="gardenName" placeholder="What's your garden name?" onChange={this.handleChange} value={this.state.gardenName} />
//     <input type="text" name="gardenLocation" placeholder="49.234123,-123.1231" onChange={this.handleChange} value={this.state.gardenLocation} />
//     <button>Add Garden</button>
//   </form>
//   <form onSubmit ={this.handleSubmitPerson}>
//     <input type="text" name="user" placeholder="Who would you like to add?" onChange={this.handleChange} value={this.state.user} />
//     <button>Add Person</button>
//   </form>
//   <form onSubmit ={this.handleChangeGardenID}>
//     <input type="text" name="gardenID" placeholder="What is the GardenID?" onChange={this.handleChange} value={this.state.gardenID} />
//     <button>Change Garden ID</button>
//   </form>
// </div>
