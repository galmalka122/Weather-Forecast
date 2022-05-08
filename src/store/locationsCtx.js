import { createContext } from "react";
const LocationsContext = createContext({
  locations: [],
  isValidName: (input) => {},
  addLocation: (location) => {},
});
export default LocationsContext;
