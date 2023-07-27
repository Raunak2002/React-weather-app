import React from "react";
import {FaArrowUp,FaArrowDown,FaWind} from 'react-icons/fa';
import {BiHappy} from 'react-icons/bi';
import {MdCompress,MdOutlineWaterDrop} from 'react-icons/md';

import './description.css';
import { useDispatch, useSelector } from "react-redux";
import { selectUserEmail } from "../features/userSlice";
import { selectWeather, setWeather } from "../features/savedSlice";


function Description({weather,units}) {
 const tempUnits = units === 'metric' ? '°C' : '°F'
 const windUnits = units === 'metric' ? 'm/s' : 'm/h'
 const username = useSelector(selectUserEmail);

 const sweathers = useSelector(selectWeather);
 const dispatch = useDispatch();

 let saved = [];

 function handleClick(){
    const myElem = sweathers.find(sweather => sweather.name === weather.name);
    if(myElem){
        saved = [...sweathers];
        alert("Already Saved");
    }
    else{
        saved = [...sweathers,weather];
        alert("Successfully Saved");
    }
    dispatch(
        setWeather({
          weathers: saved,
        })
    );
    console.log(sweathers);
 }

 const cards = [
    {
        id: 1,
        icon: <FaArrowDown/>,
        title: "min",
        data: weather.temp_min.toFixed(),
        unit: tempUnits,
    },
    {
        id: 2,
        icon: <FaArrowUp/>,
        title: "max",
        data: weather.temp_max.toFixed(),
        unit: tempUnits,
    },
    {
        id: 3,
        icon: <BiHappy/>,
        title: "feels like",
        data: weather.feels_like.toFixed(),
        unit: tempUnits,
    },
    {
        id: 4,
        icon: <MdCompress/>,
        title: "pressure",
        data: weather.pressure,
        unit: "hPa",
    },
    {
        id: 5,
        icon: <MdOutlineWaterDrop/>,
        title: "humidity",
        data: weather.humidity,
        unit: "%",
    },
    {
        id: 6,
        icon: <FaWind/>,
        title: "wind speed",
        data: weather.speed.toFixed(),
        unit: windUnits,
    },
];

  return <div className="descriptions">
    <div className="section section_descriptions">
    {cards.map(({id,icon,title,data,unit})=>(
        <div key={id} className="card">
        <div className="description_card-icon">
        {icon}
        <small>{title}</small>
        </div>
        <h2>{`${data} ${unit}`}</h2>
        </div>
    ))}
  </div>
  {username && <button onClick={handleClick}>Add to Save</button>}
  </div>
  ;
}

export default Description;