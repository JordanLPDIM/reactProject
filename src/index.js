import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import Navigation from './navigation';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './login';
import Contacts from './register';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from './firebase';
import { useState, useEffect } from 'react';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
