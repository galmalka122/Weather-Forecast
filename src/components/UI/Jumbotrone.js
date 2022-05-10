const Jumbotrone = (props) => {
  return (
    <div className="container border shadow-lg gap-2 my-3">
      <div className="row p-3">{props.children}</div>
    </div>
  );
};

export default Jumbotrone;
