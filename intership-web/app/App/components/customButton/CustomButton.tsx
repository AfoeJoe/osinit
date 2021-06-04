import * as React from 'react';

/**
 * Custom button props
 * @props text - text for the button
 * @props children - to be rendered ,useful for icons etc
 * @props disabled - to enabled or disable the button
 * @props className -list of css classes to be applied on the button tag
 */
type ICustomButtonProps = {
  text: string;
  children?: any;
  disabled?: boolean;
  className?: string;
  onClick?: 'MouseEventHandler<HTMLButtonElement>';
  type?: 'submit' | 'reset' | 'button';
};
/**
 * CustomButton component
 * @param props - passed in props
 * @returns a custom button
 */
function CustomButton({
  text,
  children,
  disabled,
  className,
  type,
}: ICustomButtonProps) {
  return (
    <div>
      <button
        className={`btn ${className}`}
        disabled={disabled}
        type={type}
        onClick={onclick}
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
