import * as React from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../../../Actions/Actions";

function DeleteModal({ text, children, disabled, className, ...rest }) {
  const dispatch = useDispatch();
  const { toggleDelete} = new Actions(dispatch);
  return (
    <div id="deleteEmployeeModal" className="modal fade show">
      <div className="modal-dialog">
        <div className="modal-content">
          <form>
            <div className="modal-header">
              <h4 className="modal-title">Delete Employee</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true" onClick={toggleDelete}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete these Records?</p>
              <p className="text-warning">
                <small>This action cannot be undone.</small>
              </p>
            </div>
            <div className="modal-footer">
              <input
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                value="Cancel" onClick={toggleDelete}
              />
              <input type="submit" className="btn btn-danger" value="Delete" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
DeleteModal.defaultProps = {
  type: "button",
  disabled: false,
  text: "Click Me",
};

export default DeleteModal;
