import { MdVisibility } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaDirections } from "react-icons/fa";
import { BsSpeedometer2 } from "react-icons/bs";
import React, { useContext } from "react";
import { WeatherContext } from "../context";

const Wind: React.FC = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const getWeatherConditions = (visibility: number) => {
    if (visibility < 1000) {
      return "Foggy";
    } else if (visibility < 5000) {
      return "Rainy";
    } else if (visibility < 10000) {
      return "Misty";
    } else {
      return "Clear";
    }
  };

  const degree = weatherData.wind.deg;
  const speed = weatherData.wind.speed;
  const visibility = weatherData.visibility;
  const weatherConditions = getWeatherConditions(visibility);
  const timezoneOffsetSeconds = weatherData.timezone;
  const timezoneHours = timezoneOffsetSeconds / 3600;
  const timezoneGMT = `GMT${timezoneHours >= 0 ? "+" : "-"}${Math.abs(
    timezoneHours
  )}`;

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="bg-gray-500 p-2 col-span-12 sm:col-span-3 rounded-xl flex flex-col items-center justify-center text-white gap-2 h-32">
        <span className="text-5xl">
          <BsSpeedometer2 />
        </span>
        <p>Speed: {speed} km/h</p>
      </div>
      <div className="bg-gray-500 p-2 col-span-12 sm:col-span-3 rounded-xl flex flex-col items-center justify-center text-white gap-2 h-32">
        <span className="text-5xl">
          <FaDirections />
        </span>
        <p>Direction: {degree}°</p>
      </div>
      <div className="bg-gray-500 p-2 col-span-12 sm:col-span-3 rounded-xl flex flex-col items-center justify-center text-white gap-2 h-32">
        <span className="text-5xl">
          <MdVisibility />
        </span>
        <p>Visibility: {weatherConditions}</p>
      </div>
      <div className="bg-gray-500 p-2 col-span-12 sm:col-span-3 rounded-xl flex flex-col items-center justify-center text-white gap-2 h-32">
        <span className="text-5xl">
          <AiOutlineClockCircle />
        </span>
        <p>Timezone: {timezoneGMT}</p>
      </div>
    </div>
  );
};

export default Wind;
