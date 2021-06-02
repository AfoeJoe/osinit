import * as React from 'react';

type IInputFieldProps = {
  label: string;
  id: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  [otherProps: string]: any;
};

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
