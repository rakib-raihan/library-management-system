import React, { Component } from "react";
import PageTitle from "../../../module/PageTitle";
import CreateAuthor from "./module/CreateAuthor";
import DisplayAuthor from "./module/DisplayAuthor";

class ManageAuthor extends Component {
  render() {
    return (
      <React.Fragment>
        {PageTitle("Manage Author")}
        <div className="manage-category">
          <div className="row">
            <div className="col-md-4">
              <CreateAuthor />
            </div>
            <div className="col-md-8">
              <DisplayAuthor />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ManageAuthor;
