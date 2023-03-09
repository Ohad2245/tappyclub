/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import json from "./json.json";
import React, { useState } from "react";

function App() {

  const [number, setNumber] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    if (!isRotating) {
      setIsRotating(true);
      setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 3) + 1; // generate a random number between 1 and 3
        let stopFace;
        if (randomNum === 1) {
          stopFace = 2;
        } else if (randomNum === 2) {
          stopFace = 6;
        } else {
          return setIsRotating(false);
        }
        setNumber(stopFace);
        setIsRotating(false);
      }, 2000); // rotate for 2 seconds before stopping
      const cube = document.querySelector(".box");
      cube.classList.add("rotate");
    }
  };

  
  return (
    <div className="App">
      {json.map((item) => {
        return (
          <div key={item.id}>
          {/* So that it goes to the requested link and not to my localhost */}
            <a href={'https://www.' + `${item.href}`} key={item.id}>
              {item.text}
            </a>
            <br></br>
            {item.text}
            <br></br>
            {item.target}
            <br></br>
            {item.number1}
            <br></br>
            {item.number2}
          </div>
        );
      })}

      <br></br>
      <div className="cubes">
      <div className="cube">
        <div className={`box ${isRotating ? "rotate" : ""}`}>
          <div className="card" id="front">{number}</div>
          <div className="card" id="back">{7 - number}</div>
          <div className="card" id="left">{number + 1}</div>
          <div className="card" id="right">{number - 1}</div>
          <div className="card" id="top">{8- number}</div>
          <div className="card" id="bottom">{number-2}</div>
        </div>
      </div>

      <div className="cube2">
      <div className={`box ${isRotating ? "rotate" : ""}`}>
          <div className="card" id="front">{number}</div>
          <div className="card" id="back">{7 - number}</div>
          <div className="card" id="left">{number + 1}</div>
          <div className="card" id="right">{number - 1}</div>
          <div className="card" id="top">{8- number}</div>
          <div className="card" id="bottom">6</div>
        </div>

        <div className="container">
          <a onClick={handleClick}><span>Roll the Cube</span></a>

        </div>
        </div>
    </div>
    </div>
  );
}

export default App;
