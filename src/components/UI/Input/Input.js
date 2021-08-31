import React from "react";

import classes from "./Input.module.css";

function isInvalid({ valid, touched, schouldValidate }) {
  return !valid && schouldValidate && touched;
}

const Input = (props) => {
  const inputType = props.type || "text";
  const cls = [classes.Input];
  if (isInvalid(props)) {
    cls.push(classes.invalid);
  }

  const htmlFor = `${inputType}-${Math.random()}`;
  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />

      {isInvalid(props) ? <span>{props.errorMessage}</span> : null}
    </div>
  );
};

export default Input;
