import React, { Component } from 'react';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from './firebase.js';
import { Chart } from "react-charts";

class SignIn extends Component {
  state={isSignedIn: false}
  uiConfig = {
    signInFlow: "popup",
    signInOptions:
    [firebase.auth.GoogleAuthProvider.PROVIDER_ID,
     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID],
    callbacks:{
      signInSuccess: () => false
    }
  }

  componentDidMount = () =>{
    firebase.auth().onAuthStateChanged(user=>{
      this.setState({isSignedIn:!!user})

      this.props.status(firebase.auth().currentUser.displayName)
    })

  }

  render(){
    var lineChart = (
      <div
        style={{
          width: "500px",
          height: "300px"
        }}
      >
        <Chart
          data={[
            {
              label: "Series 1",
              data: [[0, 27], [1, 25],
              [2, 23], [3, 95]]
            },
            {
              label: "Series 2",
              data: [[0, 65], [1, 63],
              [2, 56], [3, 52]]
            },
            {
              label: "Series 3",
              data: [[0, 32], [1, 12],
              [2, 54], [3, 42]]
            },
            {
              label: "Series 4",
              data: [[0, 82], [1, 76],
              [2, 72], [3, 68]]
            },
            {
              label: "Series 5",
              data: [[0, 56], [1, 53],
              [2, 45], [3, 34]]
            }
          ]}
          axes={[
            { primary: true, type: "linear", position: "bottom" },
            { type: "linear", position: "left" }
          ]}
        />
      </div>
    );

    return(
      <div>
      {this.state.isSignedIn ?
      <span>
      <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
      <img className="profpic" alt="profile pic" src={firebase.auth().currentUser.photoURL}/>
      <br/>
      <button onClick={() => firebase.auth().signOut() & this.props.status("logout")}>Sign Out</button>
      {lineChart}
      </span>
    :
    <StyledFirebaseAuth
    uiConfig={this.uiConfig}
    firebaseAuth={firebase.auth()}
    />
  }
    </div>
    )
  }


}
export default SignIn;
