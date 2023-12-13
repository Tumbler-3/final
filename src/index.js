import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App/App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/CME" />} />
        <Route path='/CME' element={<App num={1} />}/>
        <Route path='/FLR' element={<App num={2} />}/>
        <Route path='/WSAE' element={<App num={3} />}/>
        <Route path='*' element={<Navigate to="/CME" />}/>
      </Routes>
    </BrowserRouter>
  </div>
);
