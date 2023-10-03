import Image from "next/image";
import { Inter } from "next/font/google";
import { useContext } from "react";
import { WeatherContext } from "./context";
import Weather from "./weather";
import Navbar from "./content/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-10/12 m-auto">
      <Navbar />
      <Weather />
    </div>
  );
}
