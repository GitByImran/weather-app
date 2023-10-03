import { WiSunset } from "react-icons/wi";
import { WiSunrise } from "react-icons/wi";
import React from "react";
import moment from "moment";

const System = () => {
  const sunriseTimestamp = 1696290264;
  const sunsetTimestamp = 1696333157;

  const sunriseMoment = moment.unix(sunriseTimestamp);
  const sunsetMoment = moment.unix(sunsetTimestamp);

  const sunriseTime = sunriseMoment.format("LT");
  const sunsetTime = sunsetMoment.format("LT");

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="bg-gray-500 p-2 col-span-12 sm:col-span-3 rounded-xl flex flex-col items-center justify-center text-white gap-2 h-32">
        <span className="text-5xl">
          <WiSunrise />
        </span>
        <p>Sunrise: {sunriseTime}</p>
      </div>
      <div className="bg-gray-500 p-2 col-span-12 sm:col-span-3 rounded-xl flex flex-col items-center justify-center text-white gap-2 h-32">
        <span className="text-5xl">
          <WiSunset />
        </span>
        <p>Sunrise: {sunsetTime}</p>
      </div>
    </div>
  );
};

export default System;
