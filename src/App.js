import React from "react";
import { useState,useEffect } from "react";
import Search from "./Search";
import Cards from "./Cards";
import './App.css'

// 51ba6a95
const API_URL = 'http://www.omdbapi.com?apikey=51ba6a95'
const App = ()=>{

    const [obj,setObj] = useState([]);
    const[SearchData,SetSearchData] = useState("batman")
const searchMovies = async (title)=>{
const response = await fetch(`${API_URL}&s=${title}`);
const data = await response.json();

setObj(data.Search)
}


    useEffect(()=>{
     
        searchMovies(SearchData);

},[SearchData])

const ReceiveText = (txt)=>{

  
    SetSearchData(txt);

}

  return(
    <div className="app">
      <h1>Magic Moviez</h1>
       <Search HandleSearch={ReceiveText} searchData={SearchData}  />
       <div className="container">
        {obj?.length>0 ? obj.map((val,i)=>{
  
            return(
            <div  key={i}>
            <Cards key={i} imglink={val.Poster} title={val.Title} year={val.Year} type={val.Type} />
           
            
            </div>
            )
           
            }):
            
            <div className="empty">
            <h2>No movies found</h2>
           </div> 
            }
            </div>
    </div>
    
  )
}

export default App;