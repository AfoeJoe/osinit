import * as React from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../../../Actions/Actions";
import "./table.css";

export default function Table({ organizations }) {
  const headingList = Object.keys(organizations[0]);
  const dispatch = useDispatch();
  const actions = new Actions(dispatch);
  const rowData = organizations.map((row, index) => (
    <RowData key={row.id} row={row} actions={actions}/>
  ));
  return (
    <table className="table">
      <Thead heading={headingList} />
      <tbody>{rowData}</tbody>
    </table>
  );
}

function Thead(props) {
  const heading = props.heading.map((el, index) => (
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
          data-toggle="modal"
          onClick={props.actions.toggleEdit}
        >
          {" "}
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </span>
        <span
          className="text-primary pointer"
          data-toggle="modal"
          onClick={props.actions.toggleDelete}
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
