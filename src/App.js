import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const api = {
  key: "0eaf38b50196fd6bfbe70c82c2411712",
  base: "https://api.openweathermap.org/data/2.5",
};

function App() {


const dateBuilder = (d) => {

}


  return (
    <div className="App">
      <main>
        <div className="search_box">
          <input type="text" className="search_bar" placeholder="Search..." />
        </div>
        <div className="location">New york</div>
          <div className="date">{dateBuilder(new Date())}</div>
      </main>
    </div>
  );
}

export default App;
