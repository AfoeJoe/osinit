import * as React from "react";
import { withRouter} from "react-router-dom";
import CustomButton from "../../components/customButton/CustomButton";

function NoMatch(props) {
  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-between my-2">
        <CustomButton
          onClick={() => props.history.goBack()}
          text="Back"
          className="d-flex btn-primary"
        >
          {" "}
          <i className="material-icons arrow-back">&#xe5c4;</i>{" "}
        </CustomButton>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(NoMatch);
