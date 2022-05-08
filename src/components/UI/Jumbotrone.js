const Jumbotrone = (props) => {
  return (
    <div className="container shadow-lg gap-2">
      <div className="row p-0">
        <div className="col-12 card-header text-center text-light bg-primary bg-gradient fs-3 fw-bold">
          <span>
            <>{props.header}</>
          </span>
        </div>
      </div>
      <div className="row p-3">{props.children}</div>
    </div>
  );
};

export default Jumbotrone;
