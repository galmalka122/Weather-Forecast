const Input = (props) => {
  return (
    <div className="mb-3">
      <label className="form-label h5" htmlFor={props.input.id}>
        {props.input.label}
      </label>
      <input
        className={`form-control pb-3 ${props.invalid ?? ""}`}
        {...props.input}
      ></input>
      <div className="invalid-feedback">{props.info ?? ""}</div>
    </div>
  );
};
export default Input;
