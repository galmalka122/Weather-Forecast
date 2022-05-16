import { useContext } from "react";
import LocationsContext from "../../store/locationsCtx";

const Spinner = (props) => {
  const ctx = useContext(LocationsContext); //the site's context
  const className = ctx.isLoading || ctx.error ? "opacity-25" : null; //defines the classes when spinner shown/hidden

  return (
    <>
      <div
        className={`container-fluid position-absolute top-50 start-50 translate-middle${
          ctx.isLoading ? null : " d-none"
        }`}
      >
        <div
          className="spinner-border"
          style={{ width: "6rem", height: "6rem" }}
          role="status"
        />
        <div className="fs-3 fw-bold">Loading Forecast...</div>
      </div>
      <div className={className}>{props.children}</div>
    </>
  );
};
export default Spinner;
