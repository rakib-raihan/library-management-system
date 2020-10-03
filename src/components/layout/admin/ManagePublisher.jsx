import React, { Component } from "react";
import PageTitle from "../../../module/PageTitle";
import CreatePublisher from "./module/CreatePublisher";
import DisplayPublisher from "./module/DisplayPublisher";

class ManagePublisher extends Component {
  render() {
    return (
      <React.Fragment>
        {PageTitle("Manage Publisher")}
        <div className="manage-category">
          <div className="row">
            <div className="col-md-4">
              <CreatePublisher />
            </div>
            <div className="col-md-8">
              <DisplayPublisher />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ManagePublisher;
