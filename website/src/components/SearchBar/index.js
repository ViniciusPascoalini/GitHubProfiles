import React from 'react';

import './SearchBar.css'

const SearchBar = () => {
    return (
    <div className="seachBar-container">

        <div className="search-bar">

            <div className="user-inputCamp">
                TESTANDO...
            </div>
        </div>

        <button className="SearchButton" onClick="handleSearch" >Search</button>

    </div>   

    )
}

export default SearchBar;