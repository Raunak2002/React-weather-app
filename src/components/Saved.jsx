import React from "react";
import { selectWeather } from "../features/savedSlice";
import { useSelector } from "react-redux";
import './saved.css';

function Saved() {
    const sweathers = useSelector(selectWeather);


    return <div className="overlay"><div className="saved_section saved_section_descriptions">
    {sweathers.map((weather,index)=>(
        <div key={index} className="saved-card">
        <div className="saved_description_card-icon">
        <div className="sav"><span>{index+1}. {weather.name}, {weather.country}</span><img src={weather.iconURL} alt="weatherIcon"/></div>
        <div className="sav"><span>{weather.description}</span><span>Temperature: {weather.temp.toFixed()}</span></div>
        <div className="sav">
        <span>Pressure: {weather.pressure} hPa</span><span> Humidity: {weather.humidity}%</span>
        </div>
        <div className="sav">
        <span>Max: {weather.temp_max.toFixed()}</span><span> Min: {weather.temp_min.toFixed()}</span>
        </div>
        
        </div>
        
        </div>
    ))}
  </div>
  </div>
}
export default Saved;