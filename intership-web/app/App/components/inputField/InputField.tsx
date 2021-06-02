import * as React from 'react';

type IInputFieldProps = {
  label: string;
  id: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  [otherProps: string]: any;
};
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
