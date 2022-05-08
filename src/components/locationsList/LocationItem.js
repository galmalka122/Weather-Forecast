import { useState } from "react";
const LocationItem = (props) => {
  const [active, setActive] = useState(false);
  return (
    <button
      className={`list-group-item list-group-item-action ${active || ""}`}
      aria-current={active ? "true" : "false"}
      onClick={() => {
        setActive(!active);
      }}
    >
      <div className="d-flex w-100 justify-content-between text-break">
        <p className="mb-1">{props.name}</p>
        <span type="button" className="btn-close" aria-label="Close" />
      </div>
    </button>
  );
};
export default LocationItem;
