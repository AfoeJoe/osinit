import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../../components/customButton/CustomButton";
import Table from "../../components/table/Table";
import AddModal from "../../components/addModal/AddModal";
import EditModal from "../../components/editModal/EditModal";
import DeleteModal from "../../components/deleteModal/DeleteModal";
import { Actions } from "../../../Actions/Actions";

export default function OrganizationPage() {
  const [openAdd, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const { openAdd, openEdit, openDelete } = useSelector((state) => state.Modal);
  const dispatch = useDispatch();
  const actions = new Actions(dispatch);
  const { organizations, loading,reload } = useSelector((state) => state.Organization);

  React.useEffect(() => {
    actions.getOrganizations();
  }, [reload]);
  return (
    <div>
      <div className="container ">
        <div className="d-flex flex-row justify-content-between my-2">
          <CustomButton text="Back" className="d-flex btn-primary">
            {" "}
            <i className="material-icons arrow-back">&#xe5c4;</i>{" "}
          </CustomButton>

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
          {organizations && <Table organizations={organizations} />}
        </div>
        {/*<!-- Add Modal HTML */}
        {openEdit && <EditModal setOpenEdit={setOpenEdit} />}
        {/* Edit Modal HTM*/}
        {openEdit && <EditModal />}

        {/*Delete Modal HTML*/}
        {openDelete && <DeleteModal />}
      </div>
    </div>
  );
}
