import React, { Component } from "react";
import CreateTable from "../../../module/CreateTable";
import PageTitle from "../../../module/PageTitle";
import { getCustomers } from "../../../services/customerServices";

class AllCustomer extends Component {
  columns = [
    { path: "name", label: "Name" },
    { path: "email", label: "Email" },
    { path: "phone", label: "Phone" },
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
    data: [],
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

  // Database operation
  async componentDidMount() {
    const { data } = await getCustomers();

    this.setState({
      data,
    });
  }

  render() {
    const { data, pageSize, currentPage } = this.state;
    return (
      <React.Fragment>
        {PageTitle("All Customer")}
        <div className="page-content">
          <div className="row">
            <div className="col-md-12">
              {data.length ? (
                <CreateTable
                  columns={this.columns}
                  data={data}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleEdit}
                  handlePageChange={this.handlePageChange}
                />
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AllCustomer;
