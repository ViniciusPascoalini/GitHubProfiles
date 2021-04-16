import React from 'react';

import './SearchBar.css';

const SearchBar = () => {

    return (
    <div className="seachBar-container">

        <input className="search-bar" type="search" placeholder="Search a GitHub username..."/>

        <button className="SearchButton" onClick="hi" >Search</button>
        

    </div>   

    )
}

export default SearchBar;