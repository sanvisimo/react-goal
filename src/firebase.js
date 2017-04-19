import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAX78SOaBImzr-2wcGHv8dyLx64iTGIawg",
    authDomain: "goalcoach-f3bdb.firebaseapp.com",
    databaseURL: "https://goalcoach-f3bdb.firebaseio.com",
    projectId: "goalcoach-f3bdb",
    storageBucket: "goalcoach-f3bdb.appspot.com",
    messagingSenderId: "229142127246"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');