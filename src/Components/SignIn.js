import React, { Component } from 'react';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from './firebase.js';

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
              label: "Corn",
              data: [[0, 1], [1, 2],
              [2, 3], [3, 4]]
            },
            {
              label: "Corn",
              data: [[0, 1], [1, 2],
              [2, 3], [3, 4]]
            },
            {
              label: "Corn",
              data: [[0, 1], [1, 2],
              [2, 3], [3, 4]]
            },
            {
              label: "Corn",
              data: [[0, 1], [1, 2],
              [2, 3], [3, 4]]
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
      <br/>
      <button onClick={() => firebase.auth().signOut() & this.props.status("logout")}>Sign Out</button>
      <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
      <img className="profpic" alt="profile pic" src={firebase.auth().currentUser.photoURL}/>
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
