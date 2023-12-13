import React, { useEffect, useState } from "react";
import axios from "axios";
import { WeatherComponent } from "../WeatherComp/WeatherComp";
import './App.css'

const App = ({ num }) => {
  const [apidata, takedata] = useState({});

  const api =
    num === 1
      ? "https://api.nasa.gov/DONKI/CMEAnalysis?mostAccurateOnly=true&api_key=plc9oYEmyvle8s3grYLdkOOS3uaAK3ERe2T1ubhT"
      : num === 2
      ? "https://api.nasa.gov/DONKI/FLR?api_key=plc9oYEmyvle8s3grYLdkOOS3uaAK3ERe2T1ubhT"
      : "https://api.nasa.gov/DONKI/WSAEnlilSimulations?api_key=plc9oYEmyvle8s3grYLdkOOS3uaAK3ERe2T1ubhT";

  useEffect(() => {
    // fetching api
    axios.get(api).then((res) => {
      takedata(res.data.pop());
    });
  }, []);

  const date = new Date();

  return (
    <div className="container-fluid px-1  mx-auto text-center q">
      <div className="d-flex justify-content-center">
        <div className="row card0">
          <div className="card1 col-md-7">
            <h2 className="mt-3 mb-0 text-light">Solar System</h2>
            <div className="text-center">
              <img className="mt-5" />
            </div>
            <div className="row px-3 mt-3 mb-3">
              <div className="d-flex flex-column mr-3">
                <h2 className="text-light">
                  {num === 1
                    ? "Coronal mass ejection (CME)"
                    : num === 2
                    ? "Solar Flare (FLR)"
                    : "WSA+EnlilSimulation (WSAE)"}
                </h2>
                {num === 1 ? (
                  <p className="text-light mt-3 mb-0 text-center px-5 h4">
                    Coronal Mass Ejections (CMEs) are large expulsions of plasma
                    and magnetic field from the Sun's corona. They can eject
                    billions of tons of coronal material and carry an embedded
                    magnetic field (frozen in flux) that is stronger than the
                    background solar wind interplanetary magnetic field (IMF)
                    strength.
                  </p>
                ) : num === 2 ? (
                  <p className="text-light mt-3 mb-0 text-center px-5 h4">
                    A solar flare is an intense localized eruption of
                    electromagnetic radiation in the Sun's atmosphere. Flares
                    occur in active regions and are often, but not always,
                    accompanied by coronal mass ejections, solar particle
                    events, and other solar phenomena. The occurrence of solar
                    flares varies with the 11-year solar cycle.
                  </p>
                ) : (
                  <p className="text-light mt-3 mb-0 text-center px-5 h4">
                    WSA-Enlil is a large-scale, physics-based prediction the
                    model uses AI to analyze spacecraft measurements of the
                    solar wind (an unrelenting stream of material from the Sun)
                    and predict where an impending solar storm will strike.
                  </p>
                )}
                <h3 className="text-light mt-5">{date.toLocaleDateString()}</h3>
              </div>
            </div>
          </div>
          <div className="card2 col-lg-4 col-md-5">
            <div className="mr-5">
              <WeatherComponent num={num} apidata={apidata} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { App };
