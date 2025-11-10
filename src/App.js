import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [city,setcity]=useState();
const [weather,setweather]=useState();
  const handlecitychange = (e)=>{
    setcity(e.target.value);

  }
  const fetchweather = async()=>{
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'465b6b9fa0eddf836ea5aa487594cf6d'}`);
      setweather(response);
      document.getElementsByClassName('result')[0].style.display='block';
    } catch (error) {
      console.log("error fetching data",error)
    }}
  const handleclick =()=>{
  fetchweather();
  }


  
  return (
    <>
    <div className='container'>
<div className='weather'> 
  <center><a><i class="fa-solid fa-cloud-sun-rain" ></i></a></center>
  <center><label ><h4>Weather Forcast</h4></label></center>
  
<div>
  
<input className='form-control' type='text' value={city} onChange={handlecitychange} placeholder='Enter City Name'/>
<br/>
<center><button  type='submit' onClick={handleclick}>Get Weather</button></center>
</div>
</div>
 
<div className='result' style={{display:'none'}}>

  {weather &&(
    <div>
      <center><a><i class="fa-solid fa-cloud-sun-rain" ></i></a></center>
      
      <h4>Weather in {weather.data.name}</h4>
      <br/>
      <p>Temperature: {(weather.data.main.temp - 273.15).toFixed(2)} °C</p>
      <br/>
      <p>Humidity: {weather.data.main.humidity} %</p>
      <br/>
      <p>Condition: {weather.data.weather[0].description}</p>
      <br/><br/>
      <center><p>Note : The weather Conditions are accurate according to your city </p></center>
      
    </div>
  )}

</div>
    </div>
    </>
  );
}

export default App;
