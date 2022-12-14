import { useContext } from "react";
import { useLocation } from "react-router-dom";
import LocationItem from "./LocationItem";
import Card from "../UI/Card";
import LocationsContext from "../../store/locationsCtx";

const LocationsList = () => {
  const ctx = useContext(LocationsContext); //the site's context
  const onEdit = useLocation().pathname === "/manage"; //the path's state

  /**
   * hook to handle when user selects new location from the saved list
   * @param location - the selected location
   */
  const onSelectHandler = (location) => {
    ctx.handleSelect(location);
  };

  /**
   * creates the user's saved locations list. if none saved shows a message on card
   * @type {unknown[]|JSX.Element}
   */
  const list =
    ctx.locations.length !== 0 ? (
      ctx.locations.map((location) => {
        const className =
          `` +
          `${
            onEdit
              ? "pe-none"
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
      })
    ) : (
      <span className="text-center">No locatios saved yet...</span>
    );
  return (
    <Card title="Saved Locations">
      <div className="locations list-group overflow-auto">{list}</div>
    </Card>
  );
};
export default LocationsList;
