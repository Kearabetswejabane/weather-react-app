import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  console.log("props", props);
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState({});

  let longitude = props?.coordinates?.lon;
  let latitude = props?.coordinates?.lat;
  console.log("coordinates", latitude, longitude);
  useEffect(() => {
    async function fetchData() {
      const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
      const apiUrl = `http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      console.log("apiUrl", apiUrl);
      await axios
        .get(apiUrl)
        .then((response) => setForecast(response))
        .catch((error) => console.log("fetchError", error));
    }

    fetchData();
    console.log("forecast", forecast);
  }, []);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          {/* <WeatherForecastDay data={forecast[0]} /> */}
        </div>
      </div>
    </div>
  );
}
