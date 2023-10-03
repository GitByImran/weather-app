import React from "react";
import WeatherDetails from "./weatherDetails";
import WeatherLocatoin from "./weatherLocatoin";

const Weather = () => {
  return (
    <div className="grid grid-cols-7 gap-10 my-5">
      <div className="md:col-span-2 col-span-7">
        <WeatherLocatoin />
      </div>
      <div className="md:col-span-5 col-span-7">
        <WeatherDetails />
      </div>
    </div>
  );
};

export default Weather;
