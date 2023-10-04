import React, { ReactNode, createContext, useEffect, useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

// Defining the structure of the weather data
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
    sunrise: number;
    sunset: number;
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

// Defining the properties of the WeatherContext
interface WeatherContextProps {
  weatherData: WeatherData | null;
}

// Creating the WeatherContext
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
                console.log("Weather data fetched:", response.data);
                setWeatherData(response.data);

                if (Notification && Notification.permission === "granted") {
                  console.log("Creating notification...");

                  // Adding an icon to the notification
                  const iconPath = "path/to/your/icon.png";

                  const weatherNotification = new Notification(
                    "Weather Update",
                    {
                      body: `Current temperature: ${response.data.main.temp}°C`,
                      icon: iconPath,
                    }
                  );

                  // Notification callbacks
                  weatherNotification.onerror = (event) => {
                    console.error("Notification error:", event);
                  };

                  weatherNotification.onclick = (event) => {
                    console.log("Notification clicked:", event);
                    // You can handle click events here, e.g., open a specific page
                  };
                } else {
                  console.warn(
                    "Notification not created. Permission may be denied."
                  );
                }
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

  // Creating an object with the current weather data for the context
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
