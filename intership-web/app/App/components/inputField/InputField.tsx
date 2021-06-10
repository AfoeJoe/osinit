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
  name: string;
  type?: string;
  isRequired: boolean;
  value: string | null;
  autoComplete?: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

/**
 * @function  InputField -  input field component
 * @param props - list of props passed in directly
 * @returns a custom input field
 */
function InputField({
  label,
  id,
  name,
  type,
  isRequired,
  value,
  autoComplete,
  handleChange,
}: IInputFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        className="form-control"
        name={name}
        type={type}
        value={value}
        required={isRequired}
        autoComplete={autoComplete}
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
  value: '',
};

export default InputField;
