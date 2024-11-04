import React from 'react';
import logo from './logo.svg'; // The default React logo that comes with Create React App
import './App.css'; // This is for styling

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="logo" alt="React Logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>
        <p>Your Student ID: 101415063</p>
        <p>Your Name: Prabhnoor Singh</p>
        <p>George Brown College, Toronto</p>
      </div>
    </div>
  );
}

export default App;
