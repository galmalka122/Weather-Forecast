import Jumbotrone from "../components/UI/Jumbotrone";
import WeatherForm from "../components/form/WeatherForm";
import LocationsList from "../components/locationsList/LocationsList";
const Manage = (props) => {
  return (
    <Jumbotrone>
      <LocationsList id="locations" />
      <WeatherForm />
    </Jumbotrone>
  );
};
export default Manage;
