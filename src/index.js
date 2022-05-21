import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));


const firebaseConfig = {
  apiKey: "AIzaSyDB1UH2ZlWMyRKibb6HvXHnEAkLZ8X4MRA",
  authDomain: "react-edinsonflores.firebaseapp.com",
  projectId: "react-edinsonflores",
  storageBucket: "react-edinsonflores.appspot.com",
  messagingSenderId: "446257331744",
  appId: "1:446257331744:web:be17f1644cff9e2ead8645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
