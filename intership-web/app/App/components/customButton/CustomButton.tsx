import * as React from 'react';

type ICustomButtonProps = {
  text: string;
  children?: any;
  disabled?: boolean;
  className?: string;
  [otherProps: string]: any;
};

function CustomButton({
  text,
  children,
  disabled,
  className,
  ...otherProps
}: ICustomButtonProps) {
  return (
    <div>
      <button
        className={`btn ${className}`}
        disabled={disabled}
        {...otherProps}
      >
        {children}
        {text}
      </button>
    </div>
  );
}
CustomButton.defaultProps = {
  type: 'button',
  disabled: false,
  text: 'Click Me',
};

export default CustomButton;
