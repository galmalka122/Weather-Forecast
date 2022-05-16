import { Link, Outlet, useLocation } from "react-router-dom";

const Navigator = () => {
  const path = useLocation().pathname; //the current displayed path
  return (
    <div className="container">
      <div className="my-3">
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <Link to="/" className={`nav-link${path === "/" ? " active" : ""}`}>
              Forecast
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/manage"
              className={`nav-link${path === "/manage" ? " active" : ""}`}
            >
              Locations
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
export default Navigator;
