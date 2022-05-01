export const Location = (function () {
  const Location = class Location {
    #longitude;
    #latitude;
    #name;
    #weatherInfo;
    #weatherImage;

    constructor(longitude, latitude, name) {
      this.#longitude = longitude;
      this.#latitude = latitude;
      this.#name = name;
      this.#setFetchURL();
      this.#setImageURL();
    }

    getName() {
      return this.#name;
    }

    getFetchURL() {
      return this.#weatherInfo;
    }

    getImageURL() {
      return this.#weatherImage;
    }

    getLongitude() {
      return this.#longitude;
    }

    getLatitude() {
      return this.#latitude;
    }

    getLocation(dataSet) {
      if (
        this.#name === dataSet.name &&
        this.#longitude === dataSet.longitude &&
        this.#latitude === dataSet.latitude
      ) {
        return this;
      }
    }

    equals(other) {
      return this === other;
    }

    async fetchInfo() {
      debugger;
      fetch(this.#weatherInfo, {
        mode: "no-cors",
      })
        .then((res) => {
          debugger;
          res = res.json();
          console.log(res);
          return res;
        })
        .catch((err) => console.log(err));

      debugger;
    }

    #setFetchURL() {
      this.#weatherInfo = new URL("https://www.7timer.info/bin/api.pl");

      const infoParams = {
        lon: this.#longitude,
        lat: this.#latitude,
        product: "civillight",
        output: "json",
      };
      for (let k in infoParams)
        this.#weatherInfo.searchParams.append(k, infoParams[k]);
    }

    #setImageURL() {
      this.#weatherImage = new URL("https://www.7timer.info/bin/astro.php");

      const imageParams = {
        lon: this.#longitude,
        lat: this.#latitude,
        ac: 0,
        lang: "en",
        unit: "metric",
        output: "internal",
        tzshift: 0,
      };
      for (let k in imageParams)
        this.#weatherImage.searchParams.append(k, imageParams[k]);
    }
  };

  return Location;
})();
