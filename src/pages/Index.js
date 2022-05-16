import LocationInfo from "../components/locationInformation/LocationInfo";
import LocationsList from "../components/locationsList/LocationsList";
import Jumbotrone from "../components/UI/Jumbotrone";
import ForeCast from "./../components/forecast/ForeCast";

const Index = (props) => {
  return (
    <>
      <Jumbotrone>
        <LocationsList id="locations" />
        <LocationInfo />
        <ForeCast />
      </Jumbotrone>
    </>
  );
};
export default Index;
