import React from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Users from './components/Users';

import './App.css';




function App() {

  return (
    <div className="App">

      <Header className="Header"/>

      <SearchBar />

      <Users/>
    </div>
  );
}

export default App