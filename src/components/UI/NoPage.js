import { Link } from "react-router-dom";
export default function NoPage() {
  return (
    <section className="bg-primary">
      <span className="row no-page-header text-primary bg-body display-1">
        404
      </span>

      <span className="row no-page-body">
        <span className="fs-1">Sorry, Page Not Found</span>
        <span className="fs-4">The page you requested could not be found</span>
        <Link to="/" className="col-auto rounded-pill btn btn-dark">
          Go Back Home
        </Link>
      </span>
    </section>
  );
}
