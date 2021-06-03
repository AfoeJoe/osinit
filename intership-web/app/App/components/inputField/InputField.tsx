import * as React from 'react';

/**
 * Input field props
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
 * @function  InputField -  input field component
 * @param props - list of props passed in directly
 * @returns a custom input field
 */
function InputField({
  label,
  id,
  isRequired,
  handleChange,
  ...otherProps
}: IInputFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        className="form-control"
        {...otherProps}
        required={isRequired}
        onChange={handleChange}
      />
    </div>
  );
}
InputField.defaultProps = {
  autoComplete: 'username',
  id: '',
  type: 'text',
  placeholder: 'Fill in this form',
  label: 'Name',
  isRequired: false,
};

export default InputField;
