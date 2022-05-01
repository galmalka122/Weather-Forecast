import Alert from "./Alert";

const Input = (props) => {
  return (
    <div className={props.className}>
      <label className="form-label h6" htmlFor={props.input.id}>
        {props.label}
      </label>
      <input className="form-control" {...props.input}></input>
      {props.alertMessage && (
        <Alert name={props.name} message={props.alertMessage} />
      )}
    </div>
  );
};
export default Input;
