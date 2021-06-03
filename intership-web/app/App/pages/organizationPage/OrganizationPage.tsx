import { History } from 'history';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Actions } from '../../../Actions/Actions';
import { IStoreState } from '../../../Reducers/Reducers';
import BackButton from '../../components/backButton/BackButton';
import CustomButton from '../../components/customButton/CustomButton';
import DeleteModal from '../../components/deleteModal/DeleteModal';
import EditModal from '../../components/editModal/EditModal';
import Table from '../../components/table/Table';

/**
 * Organization Page
 * @param history  - Browser history passed to the backbutton component
 * @returns JSX Components that constituents  the Organization Page including the edit  and delete modals
 */
export default function OrganizationPage({ history }: { history: History }) {
  const { openEdit, openDelete } = useSelector(
    (state: IStoreState) => state.Modal
  );
  const dispatch = useDispatch();
  const actions = new Actions(dispatch);

  const { organizations, loading, reload } = useSelector(
    (state: IStoreState) => state.Organization
  );
  React.useEffect(() => {
    actions.getOrganizations();
  }, [reload, dispatch]);
  return (
    <div className="container ">
      <div className="d-flex flex-row justify-content-between my-2">
        <BackButton history={history} />
        <CustomButton
          text="Add Organization"
          className="d-flex btn-primary"
          onClick={actions.toggleEdit}
        >
          <i className="material-icons">&#xE147;</i>{' '}
        </CustomButton>
      </div>
      <div className="table-responsive">
        {loading && 'loading...'}
        {organizations && (
          <Table data={organizations} currentPage="organization" />
        )}
      </div>
      {openEdit && <EditModal />}
      {openDelete && <DeleteModal currentPage="organization" />}
    </div>
  );
}
