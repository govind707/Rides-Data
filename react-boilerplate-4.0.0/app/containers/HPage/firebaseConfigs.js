import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD_o0MTw8rhRA2Qq6mbga-ARKwEDSwmsBA",
    authDomain: "rides-data.firebaseapp.com",
    databaseURL: "https://rides-data-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "rides-data",
    storageBucket: "rides-data.appspot.com",
    messagingSenderId: "149342786034",
    appId: "1:149342786034:web:91bc74699a4fbc5df41b6b",
    measurementId: "G-D3F8VHMPQP"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
const dataBase = firebase.firestore();

export default firebase;
export {
    dataBase,
};