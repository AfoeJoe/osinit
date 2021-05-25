import * as React from "react";
function CustomButton({text,children,disabled,className,...rest}) {
  return (
    <div>
      <button className={`btn ${className}`} disabled={disabled} {...rest}>
        {children}{text}
      </button>
    </div>
  );
}
CustomButton.defaultProps = {

  type: "button",
    disabled:false,
  text: "Click Me",
};

export default CustomButton;
