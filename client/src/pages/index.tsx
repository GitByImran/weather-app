import Image from "next/image";
import { Inter } from "next/font/google";
import { useContext } from "react";
import { WeatherContext } from "./context";
import Weather from "./weather";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-10/12 m-auto py-10">
      <Weather />
    </div>
  );
}
