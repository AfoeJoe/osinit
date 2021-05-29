import * as React from "react";

export default function DivisionPage(props) {
    let { id } = props.match.params;

  return (
    <div>
      <h1>Division Page</h1>
      <p>Organization id: {id}</p>
    </div>
  );
}
