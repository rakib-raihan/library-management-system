import React, { Component } from "react";
import { getAdmin } from "../../../data/Admin";
import CreateTable from "../../../module/CreateTable";
import PageTitle from "../../../module/PageTitle";

class AllAdmin extends Component {
  columns = [
    { path: "first_name", label: "First Name" },
    { path: "last_name", label: "Last Name" },
    { path: "email", label: "Email" },
    { path: "designation", label: "Designation" },
    {
      key: "delete",
      content: (admin) => (
        <button
          className="btn btn-danger"
          onClick={() => this.handleDelete(admin)}
        >
          Delete
        </button>
      ),
    },
    {
      key: "edit",
      content: (admin) => (
        <button
          className="btn btn-primary"
          onClick={() => this.handleEdit(admin)}
        >
          Edit
        </button>
      ),
    },
  ];

  state = {
    data: getAdmin(),
    pageSize: 10,
    currentPage: 1,
  };

  handleDelete = (admin) => {
    console.log("Delete:", admin);
  };

  handleEdit = (admin) => {
    console.log("Edit:", admin);
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    const { data, pageSize, currentPage } = this.state;
    return (
      <React.Fragment>
        {PageTitle("All Admin")}
        <div className="page-content">
          <div className="row">
            <div className="col-md-12">
              <CreateTable
                columns={this.columns}
                data={data}
                pageSize={pageSize}
                currentPage={currentPage}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                handlePageChange={this.handlePageChange}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AllAdmin;
