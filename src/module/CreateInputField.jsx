import React from "react";

const createInputField = (data) => {
  const {
    label,
    type,
    id,
    placeholder,
    autoFocus,
    value,
    onChange,
    disabled,
  } = data;
  if (
    type === "text" ||
    type === "number" ||
    type === "email" ||
    type === "password"
  )
    return (
      <React.Fragment>
        <div className="form-row">
          <div className="col form-group">
            <label htmlFor={!disabled ? id : null}>{label}</label>
            <input
              type={type}
              id={id}
              placeholder={placeholder}
              autoFocus={autoFocus}
              value={value}
              className="form-control"
              onChange={onChange}
              disabled={disabled}
            />
          </div>
        </div>
      </React.Fragment>
    );
  if (type === "textarea")
    return (
      <React.Fragment>
        <div className="form-row">
          <div className="col form-group">
            <label htmlFor={!disabled ? id : null}>{label}</label>
            <textarea
              id={id}
              className="form-control"
              onChange={onChange}
              placeholder={placeholder}
              value={value}
              disabled={disabled}
            ></textarea>
          </div>
        </div>
      </React.Fragment>
    );
};

export default createInputField;
