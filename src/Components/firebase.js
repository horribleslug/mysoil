import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBfFJo4qBiH4GAwFveEhyOG4fd_lveyJew",
    authDomain: "mysoilspace.firebaseapp.com",
    databaseURL: "https://mysoilspace.firebaseio.com",
    projectId: "mysoilspace",
    storageBucket: "mysoilspace.appspot.com",
    messagingSenderId: "1089087609574"
};
firebase.initializeApp(config);
export default firebase;
