import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../../Actions/Actions";

function EditModalEmployee({ id_division }) {
  const dispatch = useDispatch();
  const { toggleEdit, createEmployee } = new Actions(dispatch);
  const { editData } = useSelector((state) => state.Modal);
  const [name, setName] = React.useState(editData.FIO || "");
  const [address, setAddress] = React.useState(editData.address || "");
  const [position, setPosition] = React.useState(editData.position || "");
  const [error, setError] = React.useState("");
  const isAdd = editData.id ? false : true;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !position || !id_division) {
      setError("Please,None of those fields can be left empty!");
      return;
    }
    createEmployee({
      FIO: name,
      id_division,
      position,
      address,
      id: editData.id || null,
    });
    toggleEdit();
  };
  console.log(editData);
  return (
    <div id="addEmployeeModal" className="modal fade show">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h4 className="modal-title">{isAdd ? "Add" : "Edit"} Employee</h4>
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
                id="empName"
                name="empName"
                autoComplete="name"
                type="text"
                label="Фамилия Имя Отчество"
                isRequired={true}
                handleChange={(e) => setName(e.target.value)}
                value={name}
              />
              <InputField
                id="address"
                name="EmployeeAddress"
                autoComplete="address"
                type="address"
                label="Employee's Address"
                isRequired={true}
                handleChange={(e) => setAddress(e.target.value)}
                value={address}
              />
              <InputField
                id="position"
                name="position"
                autoComplete="level"
                type="text"
                label="Employees's Position"
                isRequired={true}
                handleChange={(e) => setPosition(e.target.value)}
                value={position}
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

export default EditModalEmployee;

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