import { useState, useEffect } from "react";
import LocationsContext from "./locationsCtx";
const LocationsProvider = (props) => {
  const initialSelected = {
    name: undefined,
    longitude: undefined,
    latitude: undefined,
  };
  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState(initialSelected);

  const addLocationHandler = (location) => {
    const [...newLocations] = [...locations, location];
    setLocations(newLocations);
  };

  const locationsNames = locations.map((location) => location.name);

  const handleRemove = (location) => {
    if (location.name === selected.name) {
      setSelected(initialSelected);
    }
    setLocations(
      [...locations].filter((el) => {
        return el.name !== location.name;
      })
    );
  };

  const isValidName = (input) => {
    return {
      isValid:
        locationsNames.length === 0 || !locationsNames.includes(input.value),
      message: `${input.name} already in use. choose a different one`,
    };
  };

  const handleSelect = (location) => {
    const newLocation = { ...location };
    setSelected(newLocation);
  };

  const locationsCtx = {
    locations,
    selected,
    addLocation: addLocationHandler,
    isValidName,
    handleRemove,
    handleSelect,
  };

  return (
    <LocationsContext.Provider value={locationsCtx}>
      {props.children}
    </LocationsContext.Provider>
  );
};
export default LocationsProvider;
