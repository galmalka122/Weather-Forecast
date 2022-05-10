import { createContext } from "react";
const LocationsContext = createContext({
  locations: [],
  selected: {},
  isValidName: (input) => {},
  addLocation: (location) => {},
  handleRemove: (location) => {},
  handleSelect: (location) => {},
});
export default LocationsContext;
