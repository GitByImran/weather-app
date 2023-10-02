import { BsFillCloudsFill } from "react-icons/bs";
import Image from "next/image";
import React, { useContext } from "react";
import { GiModernCity } from "react-icons/gi";
import { WeatherContext } from "../context";

const WeatherLocatoin: React.FC = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/04n.png`;
  const latitude = weatherData.coord.lat;
  const longitude = weatherData.coord.lon;
  const description = weatherData.weather[0].description;

  return (
    <div className="w-full h-60 rounded-xl overflow-hidden relative">
      <Image
        src="https://images.pexels.com/photos/1915182/pexels-photo-1915182.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="rainy-day"
        height={500}
        width={300}
        objectFit="cover"
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      />
      <div
        className="absolute top-0 left-0 flex flex-col justify-end gap-1 p-5 w-full h-full"
        style={{ background: "rgba(0,0,0,40%)", color: "white" }}
      >
        <div className="text-gray-300 my-2">
          <span className="block">Latitude - {latitude}</span>
          <span className="block">Longitude - {longitude}</span>
        </div>
        <p className="text-lg text-gray-200 capitalize flex items-center gap-2">
          <BsFillCloudsFill />
          <span>{description}</span>
        </p>
        <p className="text-lg flex items-center gap-2">
          <GiModernCity /> <span>Chittagong</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherLocatoin;
