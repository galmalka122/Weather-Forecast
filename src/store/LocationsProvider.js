import { useState, useEffect } from "react";
import LocationsContext from "./locationsCtx";
const LocationsProvider = (props) => {
  const [locations, setLocations] = useState([]);

  const addLocationHandler = (location) => {
    const [...newLocations] = [...locations, location];
    setLocations(newLocations);
  };

  const locationsNames = locations.map((location) => location.name);

  const isValidName = (input) => {
    return {
      isValid:
        locationsNames.length === 0 || !locationsNames.includes(input.value),
      message: `${input.name} already in use. choose a different one`,
    };
  };

  const locationsCtx = {
    locations,
    addLocation: addLocationHandler,
    isValidName,
  };

  return (
    <LocationsContext.Provider value={locationsCtx}>
      {props.children}
    </LocationsContext.Provider>
  );
};
export default LocationsProvider;
