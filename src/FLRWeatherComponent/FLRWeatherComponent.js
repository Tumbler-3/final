import React from "react";


const FLRWeatherComponent = ({ apidata }) => {
  var begindate = new Date(apidata["beginTime"]);
  var peakdate = new Date(apidata["peakTime"]);
  var enddate = new Date(apidata["endTime"]);
  return (
    <div>
      <p className="text-light mt-3 h5">
        <a href="/CME" className="text-decoration-none text-info">&lt;=</a>
        Solar Flare
        <a href="/WSAE" className="text-decoration-none text-info">=&gt;</a>
      </p>
      <div className="row px-1 mt-4">
        <p className="text-light col">When Solar Flare begined</p>
        <p className="text-light col">
          {begindate.getHours()}:
          {(begindate.getMinutes() < 10 ? "0" : "") + begindate.getMinutes()}
        </p>
      </div>
      <div className="line mt-3 "></div>

      <div className="row px-1 mt-4">
        <p className="text-light col">When Solar Flare peaked</p>
        <p className="text-light col">
          {peakdate.getHours()}:
          {(peakdate.getMinutes() < 10 ? "0" : "") + peakdate.getMinutes()}
        </p>
      </div>
      <div className="line mt-2 "></div>

      <div className="row px-1 mt-4">
        <p className="text-light col">When Solar Flare ended</p>
        <p className="text-light col">
          {enddate.getHours()}:
          {(enddate.getMinutes() < 10 ? "0" : "") + enddate.getMinutes()}
        </p>
      </div>
      <div className="line mt-3"></div>

      <div className="row px-1 mt-4">
        <p className="text-light col">Solar Flare Type</p>
        <p className="text-light col">{apidata["classType"]} W/m^2</p>
      </div>
      <div className="line mt-2"></div>

      <div className="row px-1 mt-4">
        <p className="text-light col">Source Location</p>
        <p className="text-light col">{apidata["sourceLocation"]}</p>
      </div>
      <div className="line mt-3"></div>
    </div>
  );
};

export { FLRWeatherComponent };
