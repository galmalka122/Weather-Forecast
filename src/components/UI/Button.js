const Button = (props) => {
  const className = `col btn btn-round btn-outline-primary btn-block fw-bolder`;
  return (
    <button {...props} className={className} type="submit">
      {props.content}
    </button>
  );
};
export default Button;
