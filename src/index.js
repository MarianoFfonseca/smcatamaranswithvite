import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Yachts from "./pages/Yachts";
import FortyTwoF from "./pages/forty-two-f";
import FiftyFour_M from "./pages/FiftyFour_M";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/54s" element={<Yachts />} />
      <Route path="/42f" element={<FortyTwoF />} />
      <Route path="/54m" element={<FiftyFour_M />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
