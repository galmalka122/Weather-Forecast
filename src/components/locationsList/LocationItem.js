const LocationItem = (props) => {
  return (
    <button
      className={
        "list-group-item d-flex w-100 justify-content-between text-break " +
        props.className
      }
      onClick={props.onClick}
    >
      <p className="mb-1">{props.name}</p>
      {props.onEdit && (
        <span
          type="button"
          className="btn-close btn-danger pe-auto"
          aria-label="Close"
          onClick={props.onRemove}
        />
      )}
    </button>
  );
};
export default LocationItem;
