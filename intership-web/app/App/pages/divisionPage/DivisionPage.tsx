import { History } from 'history';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Actions } from '../../../Actions/Actions';
import { IStoreState } from '../../../Reducers/Reducers';
import BackButton from '../../components/backButton/BackButton';
import CustomButton from '../../components/customButton/CustomButton';
import DeleteModal from '../../components/deleteModal/DeleteModal';
import EditModalDivision from '../../components/editModalDivision/EditModalDivision';
import Table from '../../components/table/Table';

/**
 * @props match - acces the current page's url parameter
 * @props history - application navigation history from history library
 */
type IProps = {
  match: any;
  history: History;
};
/**
 * division Page as matched from the app component
 * @param props - match and history
 * @returns - the division page
 */
export default function DivisionPage(props: IProps) {
  const { openEdit, openDelete } = useSelector(
    (state: IStoreState) => state.Modal
  );
  const dispatch = useDispatch();
  const actions = new Actions(dispatch);
  const { divisions, loading, reload } = useSelector(
    (state: IStoreState) => state.Division
  );
  const { id } = props.match.params;

  React.useEffect(() => {
    actions.getDivisions(id);
  }, [reload, dispatch]);
  return (
    <div>
      <div className="container ">
        <div className="d-flex flex-row justify-content-between my-2">
          <BackButton history={props.history} />
          <CustomButton
            text="Add Division"
            className="d-flex btn-primary"
            onClick={actions.toggleEdit}
          >
            <i className="material-icons">&#xE147;</i>{' '}
          </CustomButton>
        </div>
        <div className="table-responsive">
          {loading && 'loading...'}
          {divisions && <Table data={divisions} currentPage="division" />}
        </div>
        {/* Edit Modal HTM*/}
        {openEdit && <EditModalDivision id_organization={id} />}

        {/*Delete Modal HTML*/}
        {openDelete && <DeleteModal currentPage="division" />}
      </div>
    </div>
  );
}
