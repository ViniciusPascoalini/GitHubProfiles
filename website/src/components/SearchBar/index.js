import React, {useState} from 'react';
import searchGitHubUser from '../../searchGitHubUser';

import './SearchBar.css';

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
    <div className="seachBar-container">

        <input 
            className="search-bar" type="text" 
            placeholder="Search a GitHub username..."
            onChange={(e) => {setSearchTerm(e.target.value);}}
        />

        <button className="SearchButton" onClick={()=>searchGitHubUser(searchTerm)} >Search</button>
        

    </div>   

    )
}

export default SearchBar;