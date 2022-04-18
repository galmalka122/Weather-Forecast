import { useState } from "react";

export default function Form(props) {
  const [inputs, setInputs] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  }

  function handleResponse(response) {
    if (!response.ok) {
      throw new Error(
        `Status not OK: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  }

  function handleJson(jsonObj) {
    debugger;
    console.log(jsonObj);
    props.receiveResult(jsonObj);
    let image = new URL("https://www.7timer.info/bin/astro.php");
    const params = {
      lon: inputs.longitude,
      lat: inputs.latitude,
      ac: 0,
      lang: "en",
      unit: "metric",
      output: "internal",
      tzshift: 0,
    };
    for (let k in params) {
      image.searchParams.append(k, params[k]);
    }
    props.reciveImageResult(image);
  }

  function handleError(error) {
    alert(error.toString());
    // exercise: replace this error message with message inside the page:
    // create a div with bootstrap class "text-danger" to display the message
    // how will you define this message? prop or state?
  }

  function handleFormSubmission(event) {
    debugger;
    event.preventDefault();
    let weather = new URL(props.url);
    const params = {
      lon: inputs.longitude,
      lat: inputs.latitude,
      product: "civillight",
      output: "json",
    };
    for (let k in params) {
      weather.searchParams.append(k, params[k]);
    }
    fetch(weather).then(handleResponse).then(handleJson).catch(handleError);
  }

  return (
    <form className="border p-3" onSubmit={handleFormSubmission}>
      <div className="mb-3 col">
        <label htmlFor="latitudeInput" className="form-label">
          Latitude:
        </label>
        <input
          type="number"
          step="any"
          name="latitude"
          value={inputs.latitude || ""}
          className="form-control"
          id="latitudeInput"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 col">
        <label htmlFor="longitudeInput" className="form-label">
          Longitude:
        </label>
        <input
          type="number"
          step="any"
          name="longitude"
          value={inputs.longitude || ""}
          className="form-control"
          id="longitudeInput"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 col">
        <label htmlFor="nameInput" className="form-label">
          Name:
        </label>
        <input
          type="text"
          step="any"
          name="name"
          value={inputs.name || ""}
          className="form-control"
          id="nameInput"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Compute
      </button>
    </form>
  );
}
