import * as React from "react";
import BackButton from "../../components/backButton/BackButton";

export default function EemployeePage(props) {
  return (
    <div className="container ">
      <div className="d-flex flex-row justify-content-between my-2">
        <BackButton history={props.history} />
      </div>
    </div>
  );
}
