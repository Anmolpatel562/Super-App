import React, { useEffect, useState } from 'react'
import './Weather.css'
export default function Weather() {
  const [currentWeather,setCurrentWeather] = useState(null);

  useEffect(()=>{
    fetch("https://api.weatherapi.com/v1/current.json?key=5e28efa4f4c7433dabd65947240703&q=Jabalpur&aqi=no")
    .then((res)=> res.json())
    .then((data)=>{
       setCurrentWeather(data);
    }).catch((error)=>console.log(error));
  
  },[]);
  return (
    <div>
       <div className="pink">
         {currentWeather?<span>{currentWeather.current.last_updated}</span>:<></>}
       </div>
       <div className='weatherDetails'>
          <div className='rain weatherBoxes'>
            {currentWeather?<img className='icon' src={currentWeather.current.condition.icon}></img>:<></>}
            {currentWeather?<p className='text'>{currentWeather.current.condition.text.toUpperCase()}</p>:<></>}
          </div>
          <div className='temp weatherBoxes'>
           {currentWeather?<p style={{marginTop:"6px"}} className='celcious'>{currentWeather.current.temp_c}°C</p>:<></>}
           {currentWeather?<p style={{marginTop:"5px"}}>{currentWeather.current.pressure_mb}mbar<br/>Pressure</p>:<></>}
          </div>
          <div className='speed weatherBoxes'>
            <div style={{display:"flex",alignItems:"center"}}>
             {currentWeather?<p>Wind&nbsp;:&nbsp;{currentWeather.current.wind_kph}&nbsp;km/h</p>:<></>} 
            </div>
            <div>
             {currentWeather?<p style={{marginRight:"14px",marginTop:"5px"}}>Humidity&nbsp;:&nbsp;{currentWeather.current.humidity}%</p>:<></>} 
            </div>
          </div>
       </div>
    </div>
  )
}
