import { useEffect, useState } from "react";
import LocationButton from "./LocationButton";

export default function SavedLocations({ inputLocations, handleRemove }) {
  debugger;
  const [pressed, setPressed] = useState();
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    addLocation(inputLocations);
  });

  function handleClick(setClicked) {
    if (pressed) pressed.setClicked("bg-light");
    setClicked("bg-success");
    setPressed({ setClicked: setClicked });
  }

  function removeLocation(location) {
    handleRemove(location);
  }

  function addLocation() {
    let counter = 0;
    return Object.values(inputLocations).map((loc) => (
      <LocationButton
        instance={loc}
        onClick={handleClick}
        isDisabled={disable}
        removeLocation={removeLocation}
        key={counter++}
      />
    ));
  }

  return (
    <div id="Locations" className="row justify-content-md-center">
      <div className="col-xs-8 col-md-6 col-lg-4">
        <div className="d-grid mt-2 bg-light">
          <button
            className="bg-light btn p-0 border rounded-0 fs-2 fw-bold text-start"
            disabled
          >
            Locations
          </button>
          {addLocation()}
        </div>
      </div>
    </div>
  );
}
