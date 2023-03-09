import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Blog from "./components/Blog";
import Yachts from "./components/Yachts";
import Sailing from "./components/Catamarans/Sailing";
import Power from "./components/Catamarans/Power";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/yachts" element={<Yachts />} />
      <Route path="/yachts/sailing" element={<Sailing />} />
      <Route path="/yachts/power" element={<Power />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
