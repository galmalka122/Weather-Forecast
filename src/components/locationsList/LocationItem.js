const LocationItem = (props) => {
  return (
    <button
      className={"list-group-item " + props.className}
      onClick={props.onClick}
    >
      <div className="d-flex w-100 justify-content-between text-break">
        <p className="mb-1">{props.name}</p>
        {props.onEdit && (
          <span
            type="button"
            className="btn-close btn-danger"
            aria-label="Close"
            onClick={props.onRemove}
          />
        )}
      </div>
    </button>
  );
};
export default LocationItem;
