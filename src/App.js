import "./App.css";
import LocationsList from "./components/locationsList/LocationsList";
import WeatherForm from "./components/form/WeatherForm";
import Navigator from "./components/UI/Navigator";
import Jumbotrone from "./components/UI/Jumbotrone";
import LocationsProvider from "./store/LocationsProvider";
import { Route, Routes } from "react-router-dom";
import LocationInfo from "./components/locationInformation/LocationInfo";
import Header from "./components/UI/Header";
const App = (props) => {
  return (
    <LocationsProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            path="manage"
            element={
              <Jumbotrone>
                <LocationsList id="locations" />
                <WeatherForm />
              </Jumbotrone>
            }
          />
          <Route
            index
            element={
              <Jumbotrone>
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
