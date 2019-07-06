import React, { Component } from 'react';
import SearchForm from './controller/SearchForm';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is app is powered by React + AWS
        </p>
        <h3>
          BUSCADOR
        </h3>
        <SearchForm/>
      </header>
    </div>
  );
}

export default App;
