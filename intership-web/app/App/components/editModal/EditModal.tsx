import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Actions } from '../../../Actions/Actions';
import { IStoreState } from '../../../Reducers/Reducers';
import InputField from './../inputField2/InputField2';

function EditModal() {
  const dispatch = useDispatch();
  const { toggleEdit, createOrganization } = new Actions(dispatch);
  const { editData } = useSelector((state: IStoreState) => state.Modal);
  const [name, setName] = React.useState(editData.name || '');
  const [address, setAddress] = React.useState(editData.address || '');
  const [inn, setInn] = React.useState(editData.INN || 0);
  const [error, setError] = React.useState('');
  const isAdd = editData.name ? false : true;
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!name || !address || inn.toString().length !== 10) {
      setError('Please,Provide valid details!');
      return;
    }
    createOrganization({ name, address, INN: inn, id: editData.id || null });
    toggleEdit();
  };

  return (
    <div id="addEmployeeModal" className="modal fade show">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h4 className="modal-title">
                {isAdd ? 'Add' : 'Edit'} Organization
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
                {error}{' '}
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
                name="OrganizationAddress"
                autoComplete="address"
                type="address"
                label="Organization Address"
                isRequired={true}
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAddress(e.target.value)
                }
                value={address}
              />
              <InputField
                id="INN"
                name="Organization INN"
                autoComplete="number"
                type="number"
                label="Organization's INN"
                isRequired={true}
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInn(e.target.value)
                }
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
                value={isAdd ? 'Add' : 'Edit'}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
