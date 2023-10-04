import { WiSunset } from "react-icons/wi";
import { WiSunrise } from "react-icons/wi";
import React, { useContext } from "react";
import moment from "moment";
import { AiOutlineClockCircle } from "react-icons/ai";
import { WeatherContext } from "../context";

const System = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  // converting sunrise timestamp to local time
  const sunriseTimestamp = weatherData.sys.sunrise;
  const sunsetTimestamp = weatherData.sys.sunset;
  const sunriseMoment = moment.unix(sunriseTimestamp);
  const sunsetMoment = moment.unix(sunsetTimestamp);
  const sunriseTime = sunriseMoment.format("LT");
  const sunsetTime = sunsetMoment.format("LT");

  // converting api timezone to local time
  const timezoneOffsetSeconds = weatherData.timezone;
  const timezoneHours = timezoneOffsetSeconds / 3600;
  const timezoneGMT = `GMT${timezoneHours >= 0 ? "+" : "-"}${Math.abs(
    timezoneHours
  )}`;

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="bg-gray-500 p-2 col-span-12 sm:col-span-4 rounded-xl flex flex-col items-center justify-center text-white gap-2 h-32">
        <span className="text-5xl">
          <WiSunrise />
        </span>
        <p>Sunrise: {sunriseTime}</p>
      </div>
      <div className="bg-gray-500 p-2 col-span-12 sm:col-span-4 rounded-xl flex flex-col items-center justify-center text-white gap-2 h-32">
        <span className="text-5xl">
          <WiSunset />
        </span>
        <p>Sunrise: {sunsetTime}</p>
      </div>
      <div className="bg-gray-500 p-2 col-span-12 sm:col-span-4 rounded-xl flex flex-col items-center justify-center text-white gap-2 h-32">
        <span className="text-5xl">
          <AiOutlineClockCircle />
        </span>
        <p>Timezone: {timezoneGMT}</p>
      </div>
    </div>
  );
};

export default System;
