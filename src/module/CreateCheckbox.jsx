import React from "react";

const CreateCheckbox = (data) => {
  const { label, id, type, group, checked, value, onChange } = data;
  return (
    <React.Fragment>
      <input
        className="form-check-input"
        type={type}
        id={id}
        name={group}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </React.Fragment>
  );
};

export default CreateCheckbox;
