import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import LocationItem from "./LocationItem";
import Card from "../UI/Card";
import LocationsContext from "../../store/locationsCtx";

const LocationsList = (props) => {
  const ctx = useContext(LocationsContext);
  const onEdit = useLocation().pathname === "/manage";

  const weatherInfo = new URL("https://www.7timer.info/bin/api.pl");
  const weatherImage = new URL("https://www.7timer.info/bin/astro.php");
  const infoParams = {
    product: "civillight",
    output: "json",
  };
  const imageParams = {
    ac: 0,
    lang: "en",
    unit: "metric",
    output: "internal",
    tzshift: 0,
  };

  const onSelectHandler = (location) => {
    if (!onEdit) {
      ctx.handleSelect(location);
    }
  };

  const list =
    ctx.locations &&
    ctx.locations.map((location) => {
      const className =
        `` +
        `${
          onEdit
            ? ""
            : ctx.selected.name === location.name
            ? "list-group-item-action active"
            : "list-group-item-action"
        }`;
      return (
        <LocationItem
          key={location.name}
          {...location}
          className={className}
          onClick={() => onSelectHandler(location)}
          onEdit={onEdit}
          onRemove={() => ctx.handleRemove(location)}
        />
      );
    });

  return (
    <Card title="Saved Locations">
      <div className="locations list-group overflow-auto">{list}</div>
    </Card>
  );
};
export default LocationsList;
