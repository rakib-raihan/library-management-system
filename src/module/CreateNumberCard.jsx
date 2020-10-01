import React from "react";

const CreateNumberCard = ({ count, content, classes }) => {
  return (
    <React.Fragment>
      <div className={classes ? "card " + classes : "card"}>
        <div className="card-body text-center">
          <h1 className="card-title">{count}</h1>
          <h5 className="card-text">{content}</h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateNumberCard;
