import * as React from 'react';

/**
 * Input field 2 props
 * @props label - label for the input field
 * @props id - id for the input field
 * @props handleChange - the onChange handler
 */
type IInputFieldProps = {
  label: string;
  id: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  [otherProps: string]: any;
};

/**
 * @function  InputField2 - Just another input field component with  label rendered
 * @param props - list props passed in directly
 * @returns the input field as needed in the edit and delete modals
 */
function InputField2({
  label,
  id,
  isRequired,
  handleChange,
  ...otherProps
}: IInputFieldProps) {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          {...otherProps}
          required={isRequired}
          onChange={handleChange}
          className="form-control"
        />
      </div>
    </div>
  );
}

export default InputField2;
