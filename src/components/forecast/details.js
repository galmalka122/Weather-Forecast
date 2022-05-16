/**
 * object to transform wind data from the fetched json
 * @type {{"1": string, "2": string, "3": string, "4": string, "5": string, "6": string, "7": string, "8": string}}
 */
export const winds = {
  1: "No wind",
  2: `0.3-3.4m/s (light)`,
  3: `3.4-8.0m/s (moderate)`,
  4: "8.0-10.8m/s (fresh)",
  5: `10.8-17.2m/s (strong)`,
  6: `17.2-24.5m/s (gale)`,
  7: `24.5-32.6m/s (storm)`,
  8: `Over 32.6m/s (hurricane)`,
};

/**
 * object to transform weather data from the fetched json
 * the object contains the relevant weather type, description and icon
 * @type {{rain: {meaning: string, name: string, type: string}, rainsnow: {meaning: string, name: string, type: string}, lightrain: {meaning: string, name: string, type: string}, oshower: {meaning: string, name: string, type: string}, clear: {meaning: string, name: string, type: string}, ishower: {meaning: string, name: string, type: string}, humid: {meaning: string, name: string, type: string}, mcloudy: {meaning: string, name: string, type: string}, tsrain: {meaning: string, name: string, type: string}, windy: {meaning: string, name: string, type: string}, cloudy: {meaning: string, name: string, type: string}, lightsnow: {meaning: string, name: string, type: string}, snow: {meaning: string, name: string, type: string}, pcloudy: {meaning: string, name: string, type: string}, ts: {meaning: string, name: string, type: string}}}
 */
export const types = {
  clear: {
    name: "clear",
    type: "Clear",
    meaning: `Total cloud cover less than 20%`,
  },
  pcloudy: {
    name: "pcloudy",
    type: "Partly Cloudy",
    meaning: `Total cloud cover between 20%-60%`,
  },
  mcloudy: {
    name: "mcloudy",
    type: "Very Cloudy",
    meaning: `Total cloud cover between 60%-80%`,
  },
  cloudy: {
    name: "cloudy",
    type: "Cloudy",
    meaning: `Total cloud cover over 80%`,
  },
  humid: {
    name: "humid",
    type: "Foggy",
    meaning: `Relative humidity over 90% with total cloud cover less than 60%`,
  },
  lightrain: {
    name: "lightrain",
    type: "Light rain or showers",
    meaning: `Precipitation rate less than 4mm/hr with total cloud cover more than 80%`,
  },
  oshower: {
    name: "oshower",
    type: "Occasional showers",
    meaning: `Precipitation rate less than 4mm/hr with total cloud cover between 60%-80%`,
  },
  ishower: {
    name: "ishower",
    type: "Isolated showers",
    meaning: `Precipitation rate less than 4mm/hr less than 60%`,
  },
  lightsnow: {
    name: "lightsnow",
    type: "Light or occasional snow",
    meaning: `Precipitation type to be ice pellets or freezing rain`,
  },
  rain: {
    name: "rain",
    type: "rain",
    meaning: `Precipitation rate over 4mm/hr`,
  },
  snow: {
    name: "snow",
    type: "Snow",
    meaning: `Precipitation rate over 4mm/hr`,
  },
  rainsnow: {
    name: "rainsnow",
    type: "Mixed",
    meaning: `Precipitation type to be ice pellets or freezing rain`,
  },
  ts: {
    name: "ts",
    type: "Thunderstorm possible",
    meaning: `Lifted Index less than -5 with precipitation rate below 4mm/hr`,
  },
  tsrain: {
    name: "tsrain",
    type: "Thunderstorm with rain",
    meaning: `Lifted Index less than -5 with precipitation rate over 4mm/hr`,
  },
  windy: {
    name: "windy",
    type: "Windy",
    meaning: `Sustained wind speed over 10.8m/s (force 6 or above)`,
  },
};
