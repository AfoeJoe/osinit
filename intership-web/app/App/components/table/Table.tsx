import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { IDispatchProps } from '../../../common';
import { Actions } from '../../../Actions/Actions';
import './table.css';

interface IProps {
  data: any;
  currentPage: string;
}
export default function Table({ data = null, currentPage }: IProps) {
  if (data.length === 0) {
    return <h1>No records!</h1>;
  }
  const headingList = Object.keys(data[0]);
  const link =
    currentPage === 'organization'
      ? '/divisions/'
      : currentPage === 'division'
      ? '/employees/'
      : '';
  const dispatch = useDispatch();
  const actions = new Actions(dispatch);

  return (
    <table className="table table-hover">
      <Thead heading={headingList} />
      <tbody>
        {data[0] &&
          data.map((row: any) => (
            <RowData
              key={row.id}
              id={row.id}
              row={row}
              actions={actions}
              link={link}
              headingList={headingList}
            />
          ))}
      </tbody>
    </table>
  );
}

interface ITheadProps {
  heading: string[];
}
function Thead(props: ITheadProps) {
  const heading =
    props.heading &&
    props.heading.map((el: string, index: number) => (
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

interface IRowDataProps {
  headingList: string[];
  link: string;
  row: any;
  id: number;
}

function RowData({
  link,
  row,
  id,
  actions,
  headingList,
}: IRowDataProps & IDispatchProps) {
  const formedData = headingList.map((el, i) => <td key={i}>{row[el]}</td>);

  return (
    <tr>
      {formedData}
      <td>
        <span className="text-primary pointer">
          {link && (
            <Link to={`${link}${id}`}>
              {' '}
              <i
                className="material-icons"
                data-toggle="tooltip"
                title="подробнее"
              >
                &#xe5da;
              </i>
            </Link>
          )}
        </span>
        <span
          className="text-primary pointer"
          data-toggle="modal"
          onClick={() => actions.toggleEdit(row)}
        >
          {' '}
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </span>
        <span
          className="text-primary pointer"
          data-toggle="modal"
          onClick={() => actions.toggleDelete(row)}
        >
          {' '}
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </span>
      </td>
    </tr>
  );
}
