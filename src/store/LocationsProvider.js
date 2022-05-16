import { useState, useEffect } from "react";
import LocationsContext from "./locationsCtx";
import { useLocation } from "react-router-dom";
import useHttp from "./../hooks/useHttp";

const LocationsProvider = (props) => {
  //the data URLs
  const weatherInfo = new URL("https://www.7timer.info/bin/api.pl");
  const weatherImage = new URL("https://www.7timer.info/bin/astro.php");

  const pathname = useLocation().pathname; //the current site's path
  const initialLocations = JSON.parse(localStorage.getItem("locations")) ?? []; //initial saved locations
  //the initial selected location
  const initialSelected = {
    name: undefined,
    longitude: undefined,
    latitude: undefined,
  };

  const [locations, setLocations] = useState(initialLocations); //saved locations state
  const [selected, setSelected] = useState(initialSelected); //current selected location state
  const [showForecast, setShowForecast] = useState(false); //boolean to indicate forecast visibility
  const [data, setData] = useState(null); //the fetch data state

  //fetch data with hook
  const {
    isLoading,
    error,
    sendRequest: fetchWeatherData,
    setError: handleModalClose,
  } = useHttp();

  //the search parameters for forecast details
  const infoParams = {
    lon: selected.longitude,
    lat: selected.latitude,
    product: "civillight",
    output: "json",
  };

  //the search parameters for forecast astrological image
  const imageParams = {
    lon: selected.longitude,
    lat: selected.latitude,
    ac: 0,
    lang: "en",
    unit: "metric",
    output: "internal",
    tzshift: 0,
  };

  //handle path change's
  useEffect(() => {
    if (pathname !== "/") {
      setSelected(initialSelected);
      setShowForecast(false);
      setData(null);
    }
  }, [pathname]);

  /**
   * add new location to saved list
   * @param location - the desired location
   */
  const addLocationHandler = (location) => {
    const [...newLocations] = [...locations, location];
    localStorage.setItem("locations", JSON.stringify(newLocations));
    setLocations(newLocations);
  };

  //transform to locations names.
  const locationsNames = locations.map((location) => location.name);

  /**
   * removes a location from saved list
   * @param location - the desired location
   */
  const handleRemove = (location) => {
    if (location.name === selected.name) {
      setSelected(initialSelected);
    }
    const newLocations = [...locations].filter((el) => {
      return el.name !== location.name;
    });
    localStorage.setItem("locations", JSON.stringify(newLocations));
    setLocations(newLocations);
  };

  /**
   * checks if name input isn't existing in saved list
   * @param input - the name input
   * @returns {{isValid: boolean, message: string}} - validation state
   */
  const isValidName = (input) => {
    return {
      isValid:
        locationsNames.length === 0 || !locationsNames.includes(input.value),
      message: `${input.name} already in use. choose a different one`,
    };
  };

  /**
   * handle when user selects new location from saved locations list
   * @param location - the desired location
   */
  const handleSelect = (location) => {
    const newLocation = { ...location };
    setSelected(newLocation);
  };

  /**
   * fetches forecast's data and astrological image
   * @param weatherData
   */
  const setWeatherData = (weatherData) => {
    weatherImage.search = new URLSearchParams(imageParams);
    setData({ weather: [...weatherData.dataseries], image: weatherImage.href });
  };

  /**
   * fetches the data from server
   * @returns {Promise<void>} - the data or error
   */
  const fetchForecast = async () => {
    await fetchWeatherData(
      {
        url: weatherInfo,
        body: infoParams,
        errorMsg: `There's a problem with the weather forecast servers`,
      },
      setWeatherData
    );
  };

  const locationsCtx = {
    showForecast,
    pathname,
    locations,
    selected,
    data,
    isLoading,
    error,
    onShowForecastHandler: fetchForecast,
    addLocation: addLocationHandler,
    isValidName,
    handleRemove,
    handleSelect,
    handleModalClose,
  };

  return (
    <LocationsContext.Provider value={locationsCtx}>
      {props.children}
    </LocationsContext.Provider>
  );
};
export default LocationsProvider;
