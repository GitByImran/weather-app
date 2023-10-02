import React from "react";
import WeatherDetails from "./weatherDetails";
import WeatherLocatoin from "./weatherLocatoin";

const Weather = () => {
  return (
    <div className="grid grid-cols-7 gap-10">
      <div className="col-span-2">
        <WeatherLocatoin />
      </div>
      <div className="col-span-5">
        <WeatherDetails />
      </div>
    </div>
  );
};

export default Weather;
