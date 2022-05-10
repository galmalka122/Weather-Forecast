import "./App.css";
import LocationsList from "./components/locationsList/LocationsList";
import WeatherForm from "./components/form/WeatherForm";
import Navigator from "./components/UI/Navigator";
import Jumbotrone from "./components/UI/Jumbotrone";
import LocationsProvider from "./store/LocationsProvider";
import { Route, Routes } from "react-router-dom";
import LocationInfo from "./components/locationInformation/LocationInfo";
const App = (props) => {
  return (
    <LocationsProvider>
      <Routes>
        <Route path="/" element={<Navigator />}>
          <Route
            path="manage"
            element={
              <Jumbotrone header="Manage Your Locations">
                <LocationsList id="locations" />
                <WeatherForm />
              </Jumbotrone>
            }
          />
          <Route
            index
            element={
              <Jumbotrone header="Display Weather Forecast">
                <LocationsList id="locations" />
                <LocationInfo />
              </Jumbotrone>
            }
          />
        </Route>
      </Routes>
    </LocationsProvider>
  );
};
export default App;
