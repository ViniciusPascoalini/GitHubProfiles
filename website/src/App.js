import React, {useState} from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';

import './App.css';




function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchButton = () => {
      const searchedName = document.getElementById("search-bar")
      setSearchTerm(searchedName);
  }

  return (
    <div className="App">

      <Header className="Header"/>

        <SearchBar />

    </div>
  );
}

export default App