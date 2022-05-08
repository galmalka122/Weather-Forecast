import { useEffect, useState, useContext } from "react";
import LocationItem from "./LocationItem";
import Card from "../UI/Card";
import LocationsContext from "../../store/locationsCtx";

const LocationsList = (props) => {
  const ctx = useContext(LocationsContext);
  const [pressed, setPressed] = useState();
  const [disable, setDisable] = useState(true);
  const list =
    ctx.locations &&
    ctx.locations.map((loc) => {
      return <LocationItem key={loc.name} {...loc} />;
    });
  useEffect(() => {
    console.log("anb");
  }, [ctx.locations]);

  function handleClick(setClicked) {
    if (pressed) pressed.setClicked("bg-light");
    setClicked("bg-success");
    setPressed({ setClicked: setClicked });
  }

  function removeLocation(location) {
    ctx.handleRemove(location);
  }

  return (
    <Card title="Manage Locations">
      <div className="locations list-group overflow-auto">{list}</div>
    </Card>
  );
};
export default LocationsList;
