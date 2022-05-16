import { useState, useEffect } from "react";
import LocationsContext from "./locationsCtx";
import { useLocation } from "react-router-dom";
import useHttp from "./../hooks/useHttp";

const LocationsProvider = (props) => {
  const weatherInfo = new URL("https://www.7timer.info/bin/api.pl");
  const weatherImage = new URL("https://www.7timer.info/bin/astro.php");

  const pathname = useLocation().pathname;
  const initialLocatins = JSON.parse(localStorage.getItem("locations")) ?? [];
  const intialSelected = {
    name: undefined,
    longitude: undefined,
    latitude: undefined,
  };

  const [locations, setLocations] = useState(initialLocatins);
  const [selected, setSelected] = useState(intialSelected);
  const [showForcast, setShowForcast] = useState(false);
  const [data, setData] = useState();
  const {
    isLoading,
    error,
    sendRequest: fetchWeatherData,
    setError: handleModalClose,
  } = useHttp();

  const infoParams = {
    lon: selected.longitude,
    lat: selected.latitude,
    product: "civillight",
    output: "json",
  };
  const imageParams = {
    lon: selected.longitude,
    lat: selected.latitude,
    ac: 0,
    lang: "en",
    unit: "metric",
    output: "internal",
    tzshift: 0,
  };

  useEffect(() => {
    if (pathname !== "/") {
      setSelected(intialSelected);
      setShowForcast(false);
      setData();
    }
  }, [pathname]);

  const addLocationHandler = (location) => {
    const [...newLocations] = [...locations, location];
    localStorage.setItem("locations", JSON.stringify(newLocations));
    setLocations(newLocations);
  };

  const locationsNames = locations.map((location) => location.name);

  const handleRemove = (location) => {
    if (location.name === selected.name) {
      setSelected(intialSelected);
    }
    const newLocations = [...locations].filter((el) => {
      return el.name !== location.name;
    });
    localStorage.setItem("locations", JSON.stringify(newLocations));
    setLocations(newLocations);
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

  const setWeatherData = (weatherData) => {
    weatherImage.search = new URLSearchParams(imageParams);
    setData({ weather: [...weatherData.dataseries], image: weatherImage.href });
  };

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
    showForcast,
    pathname,
    locations,
    selected,
    data,
    isLoading,
    error,
    onShowForcastHandler: fetchForecast,
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
