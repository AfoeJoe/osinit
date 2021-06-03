import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Actions } from '../../../Actions/Actions';
import { IStoreState } from '../../../Reducers/Reducers';

/**
 * DeleteModal
 * @param currentPage - the current page being rendered
 * @returns - the delete modal for organization,division and empployee page
 */
function DeleteModal({ currentPage }: { currentPage: string }) {
  const dispatch = useDispatch();
  const { toggleDelete, deleteOrganization, deleteDivision, deleteEmployee } =
    new Actions(dispatch);
  const { deleteData } = useSelector((state: IStoreState) => state.Modal);
  const [stateError, setStateError] = React.useState('');
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const result =
      currentPage === 'organization'
        ? deleteOrganization(deleteData.id)
        : currentPage === 'division'
        ? deleteDivision(deleteData.id)
        : deleteEmployee(deleteData.id);
    result
      .then(() => {
        toggleDelete(null);
      })
      .catch((error) => setStateError(error));
  };
  return (
    <div id="deleteEmployeeModal" className="modal fade show">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h4 className="modal-title">
                Delete{' '}
                {currentPage === 'organization'
                  ? 'Organization'
                  : currentPage === 'division'
                  ? 'division'
                  : 'employee'}
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={() => toggleDelete(null)}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>
                Are you sure you want to delete record
                {Object.keys(deleteData).map(
                  (element) => ` ${element} of ${deleteData[element]}\n`
                )}
                ?
              </p>
              <p className="text-warning">
                <small>This action cannot be undone.</small>
              </p>
            </div>
            <div className="modal-footer">
              <input
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
                onClick={() => toggleDelete(null)}
              />
              {stateError && (
                <div className="alert alert-danger" role="alert">
                  {stateError}
                </div>
              )}
              <input type="submit" className="btn btn-danger" value="Delete" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
DeleteModal.defaultProps = {
  type: 'button',
  disabled: false,
  text: 'Click Me',
};

export default DeleteModal;
