import React from "react";

const CMEWeatherComponent = ({ apidata }) => {
  return (
    <div>
      <p className="text-light mt-3 h5">
        <a href="/WSAE" className="text-decoration-none text-info">&lt;=</a>
        Coronal mass ejection
        <a href="/FLR" className="text-decoration-none text-info">=&gt;</a>
      </p>
      <div className="row px-1 mt-4">
        <p className="text-light col">Latitude</p>
        <p className="text-light col">{apidata["latitude"]} degrees</p>
      </div>
      <div className="line mt-3 "></div>

      <div className="row px-1 mt-4">
        <p className="text-light col">Longitude</p>
        <p className="text-light col">{apidata["longitude"]} degrees</p>
      </div>
      <div className="line mt-3 "></div>

      <div className="row px-1 mt-4">
        <p className="text-light col">HalfAngle</p>
        <p className="text-light col">{apidata["halfAngle"]} degrees</p>
      </div>
      <div className="line mt-3"></div>

      <div className="row px-1 mt-4">
        <p className="text-light col">Speed</p>
        <p className="text-light col">{apidata["speed"]} km/h</p>
      </div>
      <div className="line mt-3"></div>

      <div className="row px-1 mt-4">
        <p className="text-light col">Type</p>
        <p className="text-light col">{apidata["type"]}</p>
      </div>
      <div className="line mt-3"></div>
    </div>
  );
};

export { CMEWeatherComponent };
