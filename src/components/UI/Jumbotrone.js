const Jumbotrone = (props) => {
  return (
    <div className="container border">
      <div className="row p-0">
        <div className="col-12 card-header text-center text-light bg-primary bg-gradient fs-3 fw-bold">
          <span className="opacity-0">x</span>{" "}
        </div>
      </div>
      <div className="row p-3">{props.children}</div>
    </div>
  );
};

export default Jumbotrone;
