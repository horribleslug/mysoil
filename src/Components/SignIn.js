import React, { Component } from 'react';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from './firebase.js';

class SignIn extends Component {
  state={isSignedIn: false}
  uiConfig = {
    signInFlow: "popup",
    signInOptions:
    [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks:{
      signInSuccess: () => false
    }
  }

  componentDidMount = () =>{
    firebase.auth().onAuthStateChanged(user=>{
      this.setState({isSignedIn:!!user})
          console.log("user", user)
    })

  }

  render(){
    return(
      <div>
      {this.state.isSignedIn ?
      <span>
      {this.props.status()}
      <br/>
      <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
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
