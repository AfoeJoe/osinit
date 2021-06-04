import * as React from 'react';
import { IHistory } from '../../../common';

import CustomButton from '../customButton/CustomButton';

/**
 * Backbutton component
 * @param history - from the history library
 * @returns a CustomButton component that enables going back
 */
const BackButton: React.FC<IHistory> = ({ history }) => (
  <CustomButton
    onClick={() => history.goBack()}
    text="Back"
    className="d-flex btn-primary"
  >
    <i className="material-icons arrow-back">&#xe5c4;</i>
  </CustomButton>
);

export default BackButton;
