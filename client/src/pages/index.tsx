import Image from "next/image";
import { Inter } from "next/font/google";
import { useContext } from "react";
import { WeatherContext } from "./context";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h2>hello</h2>
    </div>
  );
}
