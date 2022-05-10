import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/UI/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container-fluid py-4">
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </div>
);
