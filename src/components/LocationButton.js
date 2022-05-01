import { useState } from "react";
export default function LocationButton({
  instance,
  onClick,
  isDisabled,
  removeLocation,
}) {
  const [clicked, setClicked] = useState("bg-light");
  function removeButton() {
    return (
      <button
        type="button"
        className="btn-close border shadow-none "
        aria-label="Close"
        onClick={() => removeLocation(instance)}
      ></button>
    );
  }
  console.log(isDisabled);
  return (
    <div className="btn-group">
      <button
        className={`${
          clicked + (isDisabled ? " disabled" : "")
        } shadow-none btn p-0 border text-start w-auto`}
        onClick={(e) => {
          onClick(instance, setClicked);
        }}
        aria-disabled={isDisabled}
        data-name={instance.getName()}
        data-latitude={instance.getLatitude()}
        data-longitude={instance.getLongitude()}
      >
        {instance.getName()}
      </button>
      {isDisabled && removeButton()}
    </div>
  );
}
