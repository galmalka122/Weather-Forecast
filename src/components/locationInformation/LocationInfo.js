import Card from "../UI/Card";
import { useContext } from "react";
import LocationsContext from "../../store/locationsCtx";
import InfoLine from "./InfoLine";
const LocationInfo = (props) => {
  const ctx = useContext(LocationsContext);
  const location = ctx.selected;
  return (
    <Card title="Location Information">
      {Object.entries(location).map((en) => {
        const [key, val] = en;
        return <InfoLine key={key} label={key} value={val} />;
      })}
      <div className="pt-3 gap-2 d-flex justify-content-between">
        <button
          className="btn btn-round btn-outline-info col btn-block fw-bolder"
          content="Submit"
        >
          Show Forecast
        </button>
      </div>
    </Card>
  );
};
export default LocationInfo;
