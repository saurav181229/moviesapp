import React from "react";

const Cards = ({imglink,title,year,type})=>{
    return(
        
             <div className="movie">
                <div>
                    <p>{year}</p>
                </div>
                <div>
             <img src={imglink !== 'N/A'?imglink:'https://via.placeholder.com/400'}></img>
             </div>
             
            <div>
                <span><p>{type}</p></span>
            <h3>{title}</h3>
            </div>
            
            </div>
      
    )
}
export default Cards