import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../../Actions/Actions";

function EditModal({ setOpenEdit, ...rest }) {
  const dispatch = useDispatch();
  const { toggleEdit, editOrganization, createOrganization } = new Actions(
    dispatch
  );
  const { editData } = useSelector((state) => state.Modal);
  const [name, setName] = React.useState(editData.name || "");
  const [address, setAddress] = React.useState(editData.address || "");
  const [inn, setInn] = React.useState(editData.INN || 0);
  const [error, setError] = React.useState("");
  const isAdd = editData.name ? false : true;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || inn.toString().length != 10) {
      setError("Please,Provide valid details!");
      return;
    }
    if (isAdd) {
      createOrganization({ name, address, INN: inn });
    } else editOrganization({ id: editData.id, name, address, INN: inn });
    toggleEdit();
  };
  return (
    <div id="addEmployeeModal" className="modal fade show">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h4 className="modal-title">
                {isAdd ? "Add" : "Edit"} Organization'
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={toggleEdit}
              >
                &times;
              </button>
            </div>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}{" "}
              </div>
            )}
            <div className="modal-body">
              <InputField
                id="orgName"
                name="Organization Name"
                autoComplete="name"
                type="text"
                label="Organization Name"
                isRequired={true}
                handleChange={(e) => setName(e.target.value)}
                value={name}
              />

              <InputField
                id="address"
                name="Organization's Address"
                autoComplete="address"
                type="address"
                label="Organization Address"
                isRequired={true}
                handleChange={(e) => setAddress(e.target.value)}
                value={address}
              />
              <InputField
                id="INN"
                name="Organization INN"
                autoComplete="number"
                type="number"
                label="Organization's INN"
                isRequired={true}
                handleChange={(e) => setInn(e.target.value)}
                value={inn}
              />
            </div>
            <div className="modal-footer">
              <input
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
                onClick={toggleEdit}
              />
              <input
                type="submit"
                className="btn btn-success"
                value={isAdd ? "Add" : "Edit"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditModal;

function InputField({ label, id, isRequired, handleChange, ...otherProps }) {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          {...otherProps}
          required={isRequired}
          onChange={handleChange}
          className="form-control"
        />
      </div>
    </div>
  );
}
