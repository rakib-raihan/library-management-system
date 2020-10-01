import React from "react";

const CreateSubmitButton = (data) => {
  const { title, onClick } = data;
  return (
    <button type="submit" className="btn btn-primary" onClick={onClick}>
      {title}
    </button>
  );
};

export default CreateSubmitButton;
