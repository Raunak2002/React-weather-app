import { useEffect, useState } from "react";
import Description from "./Description";
import { getFormattedWeatherData } from "../weatherService";

function Home() {
  const [city,setCity] = useState("Kolkata");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');

  useEffect(() => {
    const fetchWeatherData = async () =>{
     const data = await getFormattedWeatherData(city,units);
     setWeather(data);
     console.log(data);
    };
    fetchWeatherData();
  }, [units,city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isCesius = currentUnit === "C";
    button.innerText = isCesius ? "°F" : "°C";
    setUnits(isCesius ? 'metric':'imperial');
  };
  const enterKeyPressed = (e) =>{
      if(e.keyCode === 13) {
        setCity(e.currentTarget.value)
        e.currentTarget.blur();
      }
  }
  return (
    <div className="app">
        <div className="overlay">
        
        <div>
            {weather && (
            <div className="container">
                <div className="section section_inputs">
                      <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter City ..."/>
                      <button onClick={(e)=> handleUnitsClick(e)}>°F</button>
                </div>
                
                <div className="section section_temperature">
                <div className="icon">
                      <h3>{`${weather.name}, ${weather.country}`} </h3>
                      <img src={weather.iconURL} alt="weatherIcon"/>
                      <h3>{weather.description}</h3>
                </div>
                <div className="temperature">
                  <h1>{`${weather.temp.toFixed()} °${units === 'metric' ? 'C':'F'}`}</h1>
                </div>
            </div>
            <Description weather={weather} units={units}/>
            </div>
            )}
          </div>
        </div>    

    </div>
    
  );
}

export default Home;
