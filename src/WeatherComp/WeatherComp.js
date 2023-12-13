import React from "react";
import { CMEWeatherComponent } from "../CMEWeatherComp/CMEWeatherComp";
import { FLRWeatherComponent } from "../FLRWeatherComponent/FLRWeatherComponent";
import { WSAEWeatherComponent } from "../WSAEWeatherComponent/WSAEWeatherComponent";

const WeatherComponent = ({ num, apidata }) => {
  if (num === 1) {
    return (
      <CMEWeatherComponent apidata={apidata}/>
    );
  } else if (num === 2) {
    return (
      <FLRWeatherComponent apidata={apidata}/>
    );
  } else {
    return (
      <WSAEWeatherComponent apidata={apidata}/>
    );
  }
};

export {WeatherComponent}