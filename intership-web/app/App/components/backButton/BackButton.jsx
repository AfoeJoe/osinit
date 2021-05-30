import * as React from "react";
import CustomButton from "../customButton/CustomButton";

function BackButton({history}) {
  return (
    <CustomButton
            onClick={() => history.goBack()}
            text="Back"
            className="d-flex btn-primary"
          >
            {" "}
            <i className="material-icons arrow-back">&#xe5c4;</i>{" "}
          </CustomButton>
  );
}


export default BackButton;
