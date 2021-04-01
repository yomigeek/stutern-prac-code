import React from "react";
import "./style.css";

const Button = ({
  text,
  buttonAction,
  doubleClickAction,
  cssClass = "Button-primary",
  myRef
}) => {
  const studentAge = 3.142;
  return (
    <button
      onClick={buttonAction}
      className={cssClass}
      onDoubleClick={doubleClickAction}
      ref={myRef}
    >
      {text}
    </button>
  );
};

export default Button;
