import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../../components/customButton/CustomButton";
import BackButton from "../../components/backButton/BackButton";
import Table from "../../components/table/Table";
import AddModal from "../../components/addModal/AddModal";
import EditModal from "../../components/editModal/EditModal";
import DeleteModal from "../../components/deleteModal/DeleteModal";
import { Actions } from "../../../Actions/Actions";

export default function OrganizationPage(props) {
  const { openEdit, openDelete } = useSelector((state) => state.Modal);
  const dispatch = useDispatch();
  const actions = new Actions(dispatch);
  const { organizations, loading, reload } = useSelector(
    (state) => state.Organization
  );

  React.useEffect(() => {
    actions.getOrganizations();
  }, [reload]);
  return (
    <div className="container ">
      <div className="d-flex flex-row justify-content-between my-2">
        <BackButton history={props.history} />
        <CustomButton
          text="Add Organization"
          className="d-flex btn-primary"
          onClick={actions.toggleEdit}
        >
          <i className="material-icons">&#xE147;</i>{" "}
        </CustomButton>
      </div>
      <div className="table-responsive">
        {loading && "loading..."}
        {organizations && (
          <Table data={organizations} currentPage="organization" />
        )}
      </div>
      {/*<!-- Add Modal HTML */}
      {openEdit && <EditModal />}
      {/* Edit Modal HTM*/}
      {openEdit && <EditModal />}

      {/*Delete Modal HTML*/}
      {openDelete && <DeleteModal currentPage="organization" />}
    </div>
  );
}
