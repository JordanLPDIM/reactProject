import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { FirebaseAuth } from 'react-firebaseui';
import app from './firebase';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Contacts from './register';
import Login from './login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './navigation';
import CvReact from "./accueilCV";

/* function App() {
  return (
    <div>
      <Navigation />
      <Routes />
    </div>
  );
} */

const App = () => {
  return (
      <div className="app">
        <Routes> 
          <Route path="/" element={<CvReact />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Contacts/>} />
        </Routes>
      </div>
  );
};



export default App;
