import Card from "../UI/Card";
import { useContext } from "react";
import LocationsContext from "../../store/locationsCtx";
import InfoLine from "./InfoLine";
import Button from "./../UI/Button";
const LocationInfo = (props) => {
  const ctx = useContext(LocationsContext);
  const location = ctx.selected;
  const lines = Object.entries(location).map((en) => {
    const [key, val] = en;
    return <InfoLine key={key} label={key} value={val} />;
  });

  return (
    <Card title="Location Information">
      {lines ?? "No locations yet..."}
      <div className="pt-3 gap-2 d-flex justify-content-between">
        <Button
          content="Show Forcast"
          onClick={() => {
            location.name && ctx.onShowForcastHandler();
          }}
        />
      </div>
    </Card>
  );
};
export default LocationInfo;
