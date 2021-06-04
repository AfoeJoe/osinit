import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IHistory } from '../../../common';
import { Actions } from '../../../Actions/Actions';
import { IStoreState } from '../../../Reducers/Reducers';
import BackButton from '../../components/backButton/BackButton';
import CustomButton from '../../components/customButton/CustomButton';
import DeleteModal from '../../components/deleteModal/DeleteModal';
import EditModalEmployee from '../../components/editModalEmployee/EditModalEmployee';
import Table from '../../components/table/Table';

/**
 * @props match - acces the current page's url parameter
 * @props history - application navigation history from history library
 */
type IProps = {
  match: any;
};

/**
 * Employee Page as matched from the app component
 * @param props - match and history
 * @returns - the employee page
 */
export default function EemployeePage(props: IProps & IHistory) {
  const { openEdit, openDelete } = useSelector(
    (state: IStoreState) => state.Modal
  );
  const dispatch = useDispatch();
  const actions = new Actions(dispatch);
  const { employees, loading } = useSelector(
    (state: IStoreState) => state.Employee
  );
  let { id } = props.match.params;

  React.useEffect(() => {
    actions.getEmployees(id);
  }, [dispatch]);

  return (
    <div>
      <div className="container ">
        <div className="d-flex flex-row justify-content-between my-2">
          <BackButton history={props.history} />
          <CustomButton
            text="Add Employee"
            className="d-flex btn-primary"
            handleClick={actions.toggleEdit}
          >
            <i className="material-icons">&#xE147;</i>{' '}
          </CustomButton>
        </div>
        <div className="table-responsive">
          {loading && 'loading...'}
          {employees && <Table data={employees} currentPage="employee" />}
        </div>
        {/* Edit Modal HTM*/}
        {openEdit && <EditModalEmployee id_division={id} />}
        {/*Delete Modal HTML*/}
        {openDelete && <DeleteModal currentPage="employee" />}
      </div>
    </div>
  );
}
