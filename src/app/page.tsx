"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import SpaceWeatherCard from "../components/SpaceWeatherCard";
import SpaceWeatherChart from "../components/SpaceWeatherChart";
import {
  fallbackCmeData,
  fallbackFlareData,
  fallbackStormData,
} from "./data/fallbackData";
import { SpaceWeatherData } from "./types/types";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  const [cmeData, setCmeData] = useState<SpaceWeatherData[]>([]);
  const [flareData, setFlareData] = useState<SpaceWeatherData[]>([]);
  const [stormData, setStormData] = useState<SpaceWeatherData[]>([]);

  useEffect(() => {
    const fetchSpaceWeatherData = async () => {
      try {
        // Fetch CME data
        const cmeResponse = await axios.get(
          `https://api.nasa.gov/DONKI/CME?api_key=adPX4QoL1Q4sR8RulNLbaYYFiVO8itTHDB9V2eUf`
        );
        setCmeData(cmeResponse.data.slice(0, 20)); // Limit to 20 responses

        // Fetch Solar Flare data
        const flareResponse = await axios.get(
          `https://api.nasa.gov/DONKI/FLR?api_key=adPX4QoL1Q4sR8RulNLbaYYFiVO8itTHDB9V2eUf`
        );
        setFlareData(flareResponse.data.slice(0, 20)); // Limit to 20 responses

        // Fetch Geomagnetic Storm data
        const stormResponse = await axios.get(
          `https://api.nasa.gov/DONKI/GST?api_key=adPX4QoL1Q4sR8RulNLbaYYFiVO8itTHDB9V2eUf`
        );
        setStormData(stormResponse.data.slice(0, 20)); // Limit to 20 responses
      } catch (error) {
        console.error("Error fetching data, using fallback:", error);
        setCmeData(fallbackCmeData.slice(0, 20)); // Limit to 20 responses
        setFlareData(fallbackFlareData.slice(0, 20)); // Limit to 20 responses
        setStormData(fallbackStormData.slice(0, 20)); // Limit to 20 responses
      }
    };

    fetchSpaceWeatherData();
  }, []);

  return (
    <div className="mx-auto h-fit">
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20 font-mono">
        NASA HACKATHON
      </h1>
      <div className="w-3/4 h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(700px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  
      <ShootingStars />
      <StarsBackground/>
      <SpaceWeatherCard title="Coronal Mass Ejections" data={cmeData} />
      <SpaceWeatherCard title="Solar Flares" data={flareData} />
      <SpaceWeatherCard title="Geomagnetic Storms" data={stormData} />

      {/* Adding Space Weather Charts */}
      <SpaceWeatherChart data={cmeData} title="CME" />
      <SpaceWeatherChart data={flareData} title="Solar Flare" />
      <SpaceWeatherChart data={stormData} title="Geomagnetic Storm" />

    </div>
  );
}