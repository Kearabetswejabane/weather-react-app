import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/Kearabetswejabane" target="blank">
            Kearabetswe Jabane
          </a>{" "}
          and is{" "}
          <a href="https://github.com/Kearabetswejabane" target="blank">
            Open Sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
