import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../../components/customButton/CustomButton";
import BackButton from "../../components/backButton/BackButton";
import Table from "../../components/table/Table";
import AddModal from "../../components/addModal/AddModal";
import DeleteModal from "../../components/deleteModal/DeleteModal";
import { Actions } from "../../../Actions/Actions";
import EditModalEmployee from "../../components/editModalEmployee/EditModalEmployee";

export default function EemployeePage(props) {
  const { openEdit, openDelete } = useSelector((state) => state.Modal);
  const dispatch = useDispatch();
  const actions = new Actions(dispatch);
  const { employees, loading, reload } = useSelector((state) => state.Employee);
  let { id } = props.match.params;
  console.log(props);

  React.useEffect(() => {
    console.log(id);
    actions.getEmployees(id);
    console.log(employees);
  }, [reload]);

  return (
    <div>
      <div className="container ">
        <div className="d-flex flex-row justify-content-between my-2">
          <BackButton history={props.history} />
          <CustomButton
            text="Add Employee"
            className="d-flex btn-primary"
            onClick={actions.toggleEdit}
          >
            <i className="material-icons">&#xE147;</i>{" "}
          </CustomButton>
        </div>
        <div className="table-responsive">
          {loading && "loading..."}
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
