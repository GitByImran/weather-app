import React, { useContext } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { TbTemperature } from "react-icons/tb";
import { FaTemperatureLow } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { TbTemperatureCelsius } from "react-icons/tb";
import Image from "next/image";
import { WeatherContext } from "../context";

const Temp = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const temperature = weatherData.main.temp;
  const temperatureMax = weatherData.main.temp_max;
  const temperatureMin = weatherData.main.temp_min;
  const farTemp = (temperature - 273.15) * 1.8 + 32;
  const celTemp = temperature - 273.15;

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-12 sm:col-span-4 bg-gray-500 p-2 rounded-xl flex flex-col items-center  justify-center text-white gap-2 h-32">
        <span className="text-5xl">
          <TbTemperature />
        </span>
        <p className="flex items-center">
          {temperatureMax}K
          <BsArrowUp />
          <BsArrowDown />
          {temperatureMin}K
        </p>
      </div>
      <div className="col-span-12 sm:col-span-4 bg-gray-500 p-2 rounded-xl flex flex-col items-center  justify-center text-white gap-2 h-32">
        <span className="text-5xl">
          <TbTemperatureFahrenheit />
        </span>
        <p>Farenheit: {farTemp.toFixed(2)}°</p>
      </div>
      <div className="col-span-12 sm:col-span-4 bg-gray-500 p-2 rounded-xl flex flex-col items-center  justify-center text-white gap-2 h-32">
        <span className="text-5xl">
          <TbTemperatureCelsius />
        </span>
        <p>Celcius: {celTemp.toFixed(0)}°</p>
      </div>
    </div>
  );
};

export default Temp;
