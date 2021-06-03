import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Actions } from '../../../Actions/Actions';
import { IStoreState } from '../../../Reducers/Reducers';
import InputField from './../inputField2/InputField2';

/**
 * EditModalDivision
 * @param id_organization - takes in the organization id
 * @returns the edit  modal for the Division page
 */
function EditModalDivision({ id_organization }: { id_organization: number }) {
  const dispatch = useDispatch();
  const { toggleEdit, createDivision } = new Actions(dispatch);
  const { editData } = useSelector((state: IStoreState) => state.Modal);
  const [name, setName] = React.useState(editData.name || '');
  const [phone, setPhone] = React.useState(editData.phone || 0);
  const [error, setError] = React.useState('');
  const isAdd = editData.name ? false : true;
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!name || !phone || !id_organization) {
      setError('Please,Provide valid details!');
      return;
    }
    createDivision({
      name,
      id_organization,
      phone,
      id: editData.id || null,
    }).then(() => {
      toggleEdit();
    });
  };
  return (
    <div id="addEmployeeModal" className="modal fade show">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h4 className="modal-title">{isAdd ? 'Add' : 'Edit'} Division</h4>
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
                {error}{' '}
              </div>
            )}
            <div className="modal-body">
              <InputField
                id="divName"
                name="Division Name"
                autoComplete="name"
                type="text"
                label="Division Name"
                isRequired={true}
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                value={name}
              />
              <InputField
                id="Phone"
                name="Division Phone"
                autoComplete="tel"
                type="tel"
                label="Division's Phone"
                isRequired={true}
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPhone(e.target.value)
                }
                value={phone}
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
                value={isAdd ? 'Add' : 'Edit'}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditModalDivision;
