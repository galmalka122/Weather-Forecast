import { useContext } from "react";
import LocationsContext from "../../store/locationsCtx";
const Modal = () => {

  const ctx = useContext(LocationsContext); //the site's context
  const modalProps = { //defines properties when modal is shown/hidden
    className: `position-absolute top-25 modal${
      ctx.error ? " show d-block" : " d-none"
    }`,
    "aria-modal": ctx.error ? true : null,
    role: ctx.error ? "dialog" : null,
  };
  return (
    <div {...modalProps} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-danger">
            <h3 className="modal-title">Oops :(</h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body fs-5">
            <p>
              {ctx.error} <br />
              Please try again later
            </p>
          </div>
          <div className="modal-footer justify-content-center">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => ctx.handleModalClose()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
