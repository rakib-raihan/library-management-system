import React from "react";

const CreateSubmitButton = (data) => {
  const { title, onClick } = data;
  return (
    <div className="form-row">
      <div className="col form-group">
        <button type="submit" className="btn btn-primary" onClick={onClick}>
          {title}
        </button>
      </div>
    </div>
  );
};

export default CreateSubmitButton;
