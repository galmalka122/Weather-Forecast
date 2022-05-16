import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import LocationsProvider from "./store/LocationsProvider";
import Header from "./components/UI/Header";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <div className="container-fluid py-4">
      <BrowserRouter>
        <LocationsProvider>
          <Header />
          <App />
        </LocationsProvider>
      </BrowserRouter>
    </div>
  </StrictMode>
);
