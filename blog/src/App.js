import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Registration from './components/Registration/Registration';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <Header></Header>
     
    </div>
  );
}

export default App;
