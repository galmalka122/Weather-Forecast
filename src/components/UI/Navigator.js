import { Link, Outlet } from "react-router-dom";
const Navigator = (props) => {
  return (
    <div className="container">
      <div className="my-3">
        <ul className="nav nav-tabs justify-content-center card-header text-center  text-light bg-primary bg-gradient fs-3 fw-bold">
          <li className="nav-item text-break">
            <Link to="/" className="nav-link">
              Display Weather Forecast
            </Link>
          </li>
          <li className="nav-item text-break">
            <Link to="/manage" className="nav-link">
              Manage Your Locations
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
export default Navigator;
