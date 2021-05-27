import * as React from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../../../Actions/Actions";

function AddModal({
  setOpenAdd,
  text,
  children,
  disabled,
  className,
  ...rest
}) {
  const dispatch = useDispatch();
  const { toggleAdd } = new Actions(dispatch);
  return (
    <div id="addEmployeeModal" className="modal fade show">
      <div className="modal-dialog">
        <div className="modal-content">
          <form>
            <div className="modal-header">
              <h4 className="modal-title">Add Employee</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={toggleAdd}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Address</label>
                <textarea className="form-control" required></textarea>
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="text" className="form-control" required />
              </div>
            </div>
            <div className="modal-footer">
              <input
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
                onClick={toggleAdd}
              />
              <input type="submit" className="btn btn-success" value="Add" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
AddModal.defaultProps = {
  type: "button",
  disabled: false,
  text: "Click Me",
};

export default AddModal;
