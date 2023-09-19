import React, { useEffect } from "react";
import { useState } from "react";
import SearchIcon from './search.svg'
import './App.css'
const Search = ({HandleSearch,searchData})=>{


    
    return( 
        <div className="search">
        <label ></label>
        <input placeholder="Search for movies" onChange={(e)=>HandleSearch(e.target.value)} id="fname" name="fname" /><br></br>
        <img src={SearchIcon} alt="search" onClick={(e)=>HandleSearch(searchData)}></img>
        </div>
    )
}

export default Search;