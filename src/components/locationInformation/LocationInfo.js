import Card from "../UI/Card";
import { useContext } from "react";
import LocationsContext from "../../store/locationsCtx";
import InfoLine from "./InfoLine";
import Button from "./../UI/Button";

const LocationInfo = () => {
  const ctx = useContext(LocationsContext); //the site's context
  const location = ctx.selected; //the current selcted location from the saved list

  const lines = Object.entries(location).map((entry) => {
    //create the information card
    const [key, val] = entry;
    return <InfoLine key={key} label={key} value={val} />;
  });

  return (
    <Card title="Location Information">
      {lines ?? "No locations yet..."}
      <div className="pt-3 gap-2 d-flex justify-content-between">
        <Button
          content="Show Forecast"
          onClick={() => {
            location.name && ctx.onShowForecastHandler();
          }}
        />
      </div>
    </Card>
  );
};
export default LocationInfo;
