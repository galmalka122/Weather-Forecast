const Button = (props) => {
  return (
    <button {...props.button} className={`${props.className} btn btn-primary`}>
      {props.action}
    </button>
  );
};
export default Button;
