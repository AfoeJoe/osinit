import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Actions } from "../../../Actions/Actions";
import "./table.css";

export default function Table({ organizations }) {
  if (organizations.length ===0) {
    return <h1>No records!</h1>
  }
  const headingList =  Object.keys(organizations[0]);
  const dispatch = useDispatch();
  const actions = new Actions(dispatch);
  const rowData =
    organizations.map((row, index) => (
      <RowData key={row.id} row={row} actions={actions} />
    ));
  return (
    <table className="table table-hover">
      <Thead heading={headingList} />
      <tbody>{rowData}</tbody>
    </table>
  );
}

function Thead(props) {
  const heading =
    props.heading &&
    props.heading.map((el, index) => (
      <th scope="col" key={index}>
        {el}
      </th>
    ));
  return (
    <thead>
      <tr>
        {heading}
        <th scope="col">Actions</th>
      </tr>
    </thead>
  );
}

function RowData(props) {
  const { id, name, address, INN } = props.row;

  return (
  
    <tr>
      <th scope="row">{id}</th>

      <td>{name}</td>
      <td>{address}</td>
      <td>{INN}</td>
      <td>
      <span
          className="text-primary pointer"
          
        >
          {" "}
         <Link to={`divisions/${id}`}> <i className="material-icons" data-toggle="tooltip" title="подробнее">
            &#xe5da;
          </i></Link>
        </span>
        <span
          className="text-primary pointer"
          data-toggle="modal"
          onClick={() => props.actions.toggleEdit(props.row)}
        >
          {" "}
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </span>
        <span
          className="text-primary pointer"
          data-toggle="modal"
          onClick={() => props.actions.toggleDelete(props.row)}
        >
          {" "}
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </span>
      </td>
    </tr>
  );
}
