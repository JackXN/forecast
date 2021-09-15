import React, {useState,useEffect} from 'react';
import './App.css';
import WeatherDay from './components/WeatherDay';


function App() {

useEffect(() => {
fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=40.760780&lon=-111.891045&exclude={part}&appid=0eaf38b50196fd6bfbe70c82c2411712`)
.then((res) => res.json())
.then(res => console.log(res))
}, [])

  return (
    <div className="App">
   <h1>Weather Stuff</h1>
    </div>
  );
}

export default App;
