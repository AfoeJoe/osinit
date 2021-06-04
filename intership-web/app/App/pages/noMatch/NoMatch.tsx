import * as React from 'react';
import { IHistory } from '../../../common';

import BackButton from '../../components/backButton/BackButton';
/**
 * Basically a 404 page
 * @param history - Browser history passed to the backbutton component
 * @returns
 */
function NoMatch({ history }: IHistory) {
  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-between my-2">
        <BackButton history={history} />
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
export default NoMatch;
