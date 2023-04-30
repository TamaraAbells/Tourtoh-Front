import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from "firebase/app";
import App from './App';
import reportWebVitals from './reportWebVitals';

initializeApp({
  apiKey: "AIzaSyCyUeh-cmp9yOVQiL04qpfsXVhPXUUy8cU",
  authDomain: "tourtoh-562a5.firebaseapp.com",
  databaseURL: "https://tourtoh-562a5-default-rtdb.firebaseio.com",
  projectId: "tourtoh-562a5",
  storageBucket: "tourtoh-562a5.appspot.com",
  messagingSenderId: "777225146515",
  appId: "1:777225146515:web:87a5260e2db9c394f47d66",
  measurementId: "G-020W55MD8F"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
