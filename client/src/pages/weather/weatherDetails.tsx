import React, { useContext } from "react";
import { WeatherContext } from "../context";
import Image from "next/image";

const WeatherDetails = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const temperature = weatherData.main.temp;
  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/04n.png`;

  return (
    <div>
      <h2>Weather Details</h2>
      <Image src={iconUrl} alt="Weather Icon" height={100} width={100} />
      <p>Temperature: {temperature}</p>
    </div>
  );
};

export default WeatherDetails;
