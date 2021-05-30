import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../../components/customButton/CustomButton";
import BackButton from "../../components/backButton/BackButton";
import Table from "../../components/table/Table";
import AddModal from "../../components/addModal/AddModal";
import DeleteModal from "../../components/deleteModal/DeleteModal";
import { Actions } from "../../../Actions/Actions";
import EditModalDivision from "../../components/editModalDivision/EditModalDivision";

export default function DivisionPage(props) {
  const [openDelete, setOpenDelete] = React.useState(false);
  const { openEdit, openDelete } = useSelector((state) => state.Modal);
  const dispatch = useDispatch();
  const actions = new Actions(dispatch);
  const { divisions, loading, reload } = useSelector((state) => state.Division);
  let { id } = props.match.params;
  console.log(props);
  React.useEffect(() => {
    console.log(id);
    actions.getDivisions(id);
    console.log(divisions);
  }, [reload]);
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
            <i className="material-icons">&#xE147;</i>{" "}
          </CustomButton>
        </div>
        <div className="table-responsive">
          {loading && "loading..."}
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
