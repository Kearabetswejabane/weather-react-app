import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let longitide = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `hhtps://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitide}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thurs</div>
          <img src={props.image} alt={props.description} />
          <div WeatherForecast-Temperatures>
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
