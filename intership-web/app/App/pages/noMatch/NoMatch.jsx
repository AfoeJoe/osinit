import * as React from "react";
import { withRouter} from "react-router-dom";
import BackButton from "../../components/backButton/BackButton";

function NoMatch(props) {
  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-between my-2">
      <BackButton history={props.history} />

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
