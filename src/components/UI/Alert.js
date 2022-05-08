const Alert = (props) => {
  return (
    <div className="alert alert-danger my-3 p-2" id={`${props.name}Alert`}>
      {props.message}
    </div>
  );
};
export default Alert;
