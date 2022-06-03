
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: h
reportWebVitals();
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlpTC1BZXCoIYj_0N2Ep-FuAyNl5grFic",
  authDomain: "company-event-management.firebaseapp.com",
  projectId: "company-event-management",
  storageBucket: "company-event-management.appspot.com",
  messagingSenderId: "884208275786",
  appId: "1:884208275786:web:332ad460f8dc43945af1b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
