const Card = (props) => {
  return (
    <div className="card col-6 m-3">
      <div className="card-header text-center text-light bg-primary h3">
        {props.header}
      </div>
      <div className="card-body bg-light">{props.children}</div>
    </div>
  );
};

export default Card;
