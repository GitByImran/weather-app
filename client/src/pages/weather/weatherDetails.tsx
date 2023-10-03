import React, { useContext } from "react";
import { WeatherContext } from "../context";
import Wind from "../components/wind";
import System from "../components/system";
import Temp from "../components/temp";

const WeatherDetails: React.FC = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col h-full justify-between gap-5">
      <Temp />
      <Wind />
      <System />
    </div>
  );
};

export default WeatherDetails;

