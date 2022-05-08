const Card = (props) => {
  return (
    <div className="col-12 col-md-6 mb-3">
      <div className="fs-6 card-subtitle pb-2 text-muted border-bottom text-center">
        {props.title}
      </div>

      <div className="py-3 m-0 position-relative h-100">{props.children}</div>
    </div>
  );
};
export default Card;
