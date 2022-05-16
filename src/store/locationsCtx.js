import { createContext } from "react";
const LocationsContext = createContext({
  showForcast: false,
  pathname: "",
  locations: [],
  selected: {},
  data: {},
  isLoading: false,
  error: "",
  isValidName: (input) => {},
  addLocation: (location) => {},
  handleRemove: (location) => {},
  handleSelect: (location) => {},
  onShowForcastHandler: () => {},
  handleModalClose: () => {},
});
export default LocationsContext;
