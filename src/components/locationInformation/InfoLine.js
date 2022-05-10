const InfoLine = (props) => {
  return (
    <div className="mb-3">
      <label className="form-label h5 text-capitalize">{props.label}:</label>
      <div
        className="form-control bg-transparent border-0 fw-bold pb-3 text-center"
        type="text"
        disabled
        readOnly
      >
        {props.value ?? <span className="opacity-0">x</span>}
      </div>
    </div>
  );
};
export default InfoLine;
