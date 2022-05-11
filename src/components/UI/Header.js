import wetherIcon from "./icon.png";
import { Link, Outlet, useLocation } from "react-router-dom";

const Header = (props) => {
  const path = useLocation().pathname;
  return (
    <>
      <header class="container p-3 bg-body text-dark">
        <div class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <img
              src={wetherIcon}
              class="d-inline-block align-text-top"
              alt="icon"
            />
            <span className="fs-1 fw-bold fst-italic m-0">Weather Manager</span>
          </span>
          <ul class="nav nav-pills">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link${path === "/" ? " active" : ""}`}
              >
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
      </header>
      <Outlet />
    </>
  );
};
export default Header;
