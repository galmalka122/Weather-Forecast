const Card = (props) => {
  return (
    <div className={props.className ?? "col-12 col-md-6 mb-3"}>
      <div className="fs-3 card-title fw-bold pb-2 text-muted border-bottom text-center">
        {props.title}
      </div>

      <div className="py-3 m-0 position-relative h-100">{props.children}</div>
    </div>
  );
};
export default Card;
