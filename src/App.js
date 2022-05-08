import "./App.css";
import LocationsList from "./components/locationsList/LocationsList";
import WeatherForm from "./components/form/WeatherForm";
import Header from "./components/UI/Header";
import Jumbotrone from "./components/UI/Jumbotrone";
import LocationsProvider from "./store/LocationsProvider";
const App = (props) => {
  return (
    <>
      <Header />
      <Jumbotrone header="Manage Your Locations">
        <LocationsProvider>
          <WeatherForm />
          <LocationsList id="locations" />
        </LocationsProvider>
      </Jumbotrone>
    </>
  );
};
export default App;
