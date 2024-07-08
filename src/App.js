import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/Kearabetswejabane" target="blank">
            Kearabetswe Jabane
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Kearabetswejabane/weather-react-app"
            target="blank"
          >
            Open Sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://luxury-shortbread-fa36db.netlify.app/"
            target="blank"
          >
            hosted on netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
