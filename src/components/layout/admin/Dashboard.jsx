import React, { Component } from "react";
import CreateNumberCard from "../../../module/CreateNumberCard";
import PageTitle from "../../../module/PageTitle";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        {PageTitle("Dashboard")}
        <div className="dashboard-content">
          <div className="row">
            <div className="col-3">
              <CreateNumberCard
                count="10"
                content="Books"
                classes="text-info bg-light"
              />
            </div>
            <div className="col-3">
              <CreateNumberCard
                count="10"
                content="Categories"
                classes="text-dark bg-light"
              />
            </div>
            <div className="col-3">
              <CreateNumberCard
                count="10"
                content="Customers"
                classes="text-primary bg-light"
              />
            </div>
            <div className="col-3">
              <CreateNumberCard
                count="10"
                content="Book Issued"
                classes="text-success bg-light"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
