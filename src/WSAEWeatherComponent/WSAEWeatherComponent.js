import React from "react";

const WSAEWeatherComponent = ({ apidata }) => {
  const impList = Array(apidata["impactList"]);
  if (impList[0] != null) {
    var impact = impList[0].map((comm) => {
      var date = new Date(comm["arrivalTime"]);

      return (
        <div className="row px-1 mt-4" key={comm["location"]}>
          <p className="text-light col h4">{comm["location"]}</p>
          <p className="text-light col">
            {date.getHours()}:{(date.getMinutes() < 10 ? "0" : "") + date.getMinutes()}
          </p>
        </div>
      );
    });
  } else {
    var impact = "Solar Wind won't strike other objects in space";
  }

  return (
    <div>
      <p className="text-light mt-3 h5">
        <a href="/FLR" className="text-decoration-none text-info">&lt;=</a>
        Solar Flare Impact
        <a href="/CME" className="text-decoration-none text-info">=&gt;</a>
      </p>

      <div className="row px-1 mt-4">
        <p className="text-light col">Will Solar Wind Impact the Earth?</p>
        <p className="text-light col">
          {apidata["isEarthGB"] === false ? "No" : "Yes"}
        </p>
      </div>
      <div className="line mt-3 "></div>
      <p className="text-light mt-3 h5">Impact on other objects</p>
      <div>
        <h3 className="text-light mt-5">{impact}</h3>
      </div>
    </div>
  );
};

export { WSAEWeatherComponent };
