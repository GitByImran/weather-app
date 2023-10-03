import React, { ReactNode, createContext, useEffect, useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

interface WeatherData {
  name: string;
  timezone: number;
  visibility: number;
  dt: number;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  coord: {
    lat: number;
    lon: number;
  };
  sys: {
    country: string;
    sunrise: string;
    sunset: string;
  };
  wind: {
    deg: number;
    speed: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

interface WeatherContextProps {
  weatherData: WeatherData | null;
}

export const WeatherContext = createContext<WeatherContextProps>({
  weatherData: null,
});

const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_API_KEY}`;

            axios
              .get<WeatherData>(apiUrl)
              .then((response: AxiosResponse<WeatherData>) => {
                console.log(response.data);
                setWeatherData(response.data);
              })
              .catch((error: AxiosError) => {
                console.error(`Error fetching weather data: ${error.message}`);
              });
          },
          (error) => {
            console.error(`Error getting location: ${error.message}`);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    fetchWeatherData();
  }, []);

  const contextProps: WeatherContextProps = {
    weatherData,
  };

  return (
    <WeatherContext.Provider value={contextProps}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
