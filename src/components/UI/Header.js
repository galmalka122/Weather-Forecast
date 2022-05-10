import wetherIcon from "./icon.png";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary rounded d-flex">
      <div className="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>{" "}
        <span className="navbar-brand d-flex text-dark">
          <img
            src={wetherIcon}
            class="d-inline-block align-text-top"
            alt="icon"
          />
          <span className="fs-1 fw-bold fst-italic m-0">Weather Manager</span>
        </span>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
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
      </div>
    </nav>
  );
};
export default Header;
