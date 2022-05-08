const Button = ({ props }) => {
  const className = `btn btn-round btn-outline-info ${props.className}`;
  return (
    <button
      {...{
        ...props,
        className: className,
      }}
    >
      {props.content}
    </button>
  );
};
export default Button;
