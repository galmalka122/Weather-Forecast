const Alert = (props) => {
  return (
    <div className="alert alert-info" id={`${props.name}Alert`}>
      {props.message}
    </div>
  );
};
export default Alert;
