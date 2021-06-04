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
  name: string;
  type?: string;
  isRequired: boolean;
  value: string | null;
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
  name,
  type,
  value,
  handleChange,
}: IInputFieldProps) {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          required={isRequired}
          onChange={handleChange}
          className="form-control"
        />
      </div>
    </div>
  );
}

export default InputField2;
