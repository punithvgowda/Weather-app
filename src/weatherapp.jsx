import { useState } from "react";
import Infobox from "./infobox";
import Search from "./search";

function Weatherapp(){
    const[weatherinfo,setWeatherinfo]=useState({
        city:"Bengaluru",
        description:"clear sky",
        feelslike:32.01,
        maxtemp:29.09,
        mintemp:29.09,
        temp:29.09,
    })
    function updateinfo(newinfo)
    {
        setWeatherinfo(newinfo);
        
    }
    return(
        <>
           <Search updateinfo={updateinfo}/>
        <Infobox info={weatherinfo}/>
     
        </>
    )
}
export default Weatherapp;