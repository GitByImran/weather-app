import { MdUpdate } from "react-icons/md";
import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";
import { GiModernCity } from "react-icons/gi";
import { WeatherContext } from "../context";
import moment from "moment";

const WeatherLocation: React.FC = () => {
  const { weatherData } = useContext(WeatherContext);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format("DD-MM-YYYY - h:mm:ss a"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const timestamp = weatherData.dt;
  const momentDate = moment.unix(timestamp);
  const dateString = momentDate.format("LLLL");

  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  const latitude = weatherData.coord.lat;
  const longitude = weatherData.coord.lon;
  const city = weatherData.name;
  const description = weatherData.weather[0].description;

  return (
    <div className="w-full h-60 sm:h-60 md:h-full rounded-xl overflow-hidden relative">
      <Image
        src="https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="weather-icon"
        height={500}
        width={300}
        objectFit="cover"
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      />
      <div
        className="absolute top-0 left-0 flex flex-col justify-end gap-1 p-5 w-full h-full"
        style={{ background: "rgba(0,0,0,40%)", color: "white" }}
      >
        <div className="text-gray-300">
          <span className="block">Latitude - {latitude}</span>
          <span className="block">Longitude - {longitude}</span>
        </div>
        <p className="text-gray-300 flex items-center gap-2 my-1">
          last update on - {dateString}
        </p>
        <p className="text-gray-200 capitalize flex items-center gap-2">
          <Image src={iconUrl} alt="Weather Icon" height={30} width={30} />
          <span>{description}</span>
        </p>
        <p className="flex items-center gap-2">
          <GiModernCity /> <span>{city}</span>
        </p>
        <p className="text-xl mt-2 text-white">{currentTime}</p>
      </div>
    </div>
  );
};

export default WeatherLocation;
