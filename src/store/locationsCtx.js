import { createContext } from "react";
const LocationsContext = createContext({
  showForecast: false,
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
  onShowForecastHandler: () => {},
  handleModalClose: () => {},
});
export default LocationsContext;
