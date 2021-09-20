import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";


function App() {

// Initial state values
const [latitude, setLatitude] = useState(0);
const [longitude, setLongitude] = useState(0);
const [weather,setWeather] = useState('');
const [temp, setTemp] = useState(0);
const [cityName, setCityName] = useState('');







  return (
  <div className='App'>
<h1>Weather</h1>

  </div>
  );
}

export default App;
