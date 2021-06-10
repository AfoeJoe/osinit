import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group'; // ES6

import { IHistory } from '../../../common';
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
export default function OrganizationPage({ history }: IHistory) {
  const { openEdit, openDelete } = useSelector(
    (state: IStoreState) => state.Modal
  );
  const dispatch = useDispatch();
  const actions = new Actions(dispatch);

  const { organizations, loading } = useSelector(
    (state: IStoreState) => state.Organization
  );
  React.useEffect(() => {
    actions.getOrganizations();
  }, [dispatch]);
  return (
    <div className="container ">
      <div className="d-flex flex-row justify-content-between my-2">
        <BackButton history={history} />
        <CustomButton
          text="Add Organization"
          className="d-flex btn-primary"
          handleClick={actions.toggleEdit}
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

      <CSSTransition
        in={openEdit}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <EditModal />
      </CSSTransition>
      <CSSTransition
        in={openDelete}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <DeleteModal currentPage="organization" />
      </CSSTransition>
    </div>
  );
}
