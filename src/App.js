import React from 'react';
import Router from './components/Router/Router';
import './App.css';
import Navnav from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App myDarkyBackground">
      <Navnav />
      <Router />
    </div>
  );
}

export default App;
