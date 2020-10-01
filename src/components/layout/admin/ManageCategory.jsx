import React, { Component } from "react";
import PageTitle from "../../../module/PageTitle";
import CreateCategory from "./module/CreateCategory";
import DisplayCategory from "./module/DisplayCategory";

class ManageCategory extends Component {
  render() {
    return (
      <React.Fragment>
        {PageTitle("Manage Category")}
        <div className="manage-category">
          <div className="row">
            <div className="col-md-4">
              <CreateCategory />
            </div>
            <div className="col-md-8">
              <DisplayCategory />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ManageCategory;
