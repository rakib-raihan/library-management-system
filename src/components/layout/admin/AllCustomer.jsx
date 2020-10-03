import React, { Component } from "react";
import { getCustomer } from "../../../data/Customer";
import CreateTable from "../../../module/CreateTable";
import PageTitle from "../../../module/PageTitle";

class AllCustomer extends Component {
  columns = [
    { path: "first_name", label: "First Name" },
    { path: "last_name", label: "Last Name" },
    { path: "email", label: "Email" },
    {
      key: "delete",
      content: (customer) => (
        <button
          className="btn btn-danger"
          onClick={() => this.handleDelete(customer)}
        >
          Delete
        </button>
      ),
    },
    {
      key: "edit",
      content: (customer) => (
        <button
          className="btn btn-primary"
          onClick={() => this.handleEdit(customer)}
        >
          Edit
        </button>
      ),
    },
  ];

  state = {
    data: getCustomer(),
    pageSize: 10,
    currentPage: 1,
  };

  handleDelete = (customer) => {
    console.log("Delete:", customer);
  };

  handleEdit = (customer) => {
    console.log("Edit:", customer);
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
        {PageTitle("All Customer")}
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

export default AllCustomer;
