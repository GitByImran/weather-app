import React, { Children, ReactNode, createContext } from "react";

interface WeatherData {
  main: {
    temp: string;
  };
  weather: {
    description: string;
  }[];
}

interface WeatherContextProps {
  weatherData: WeatherData | null;
  run: () => string;
  // refetchWeather: () => void;
}

export const WeatherContext = createContext<WeatherContextProps | undefined>(
  undefined
);

const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const run = () => {
    return "hello world";
  };
  const contextProps: WeatherContextProps = {
    weatherData: null,
    run,
  };
  return (
    <WeatherContext.Provider value={contextProps}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
