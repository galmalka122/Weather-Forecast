import { Link } from "react-router-dom";
import "./NoPage.css";
export default function NoPage() {
  return (
    <section>
      <div className="container-fluid py-3">
        <span className="row no-page-header">404</span>
        <span className="row no-page-body">
          <h1 className="">Sorry, Page Not Found</h1>
          <p className="">The page you requested could not be found</p>
          <Link to="/" className="col-auto rounded-pill btn btn-c">
            Go Back Home
          </Link>
        </span>
      </div>
    </section>
  );
}
