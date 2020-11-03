import React, { Component } from "react";
import { getCustomer } from "../data/Customer";
import CreateTable from "../module/CreateTable";

class SearchCustomer extends Component {
  columns = [
    { path: "first_name", label: "Name" },
    { path: "email", label: "Email" },
    {
      key: "select",
      content: (customer) => (
        <button
          className="btn btn-success"
          onClick={() => this.props.handleSelectCustomer(customer)}
        >
          Select
        </button>
      ),
    },
  ];

  state = {
    data: null,
    pageSize: 5,
    currentPage: 1,
    searchValue: "",
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const data = getCustomer().filter((customer) => {
      return customer.email.includes(this.state.searchValue);
    });
    this.setState({
      data,
    });
  };

  handleSearchKeyword = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    const { data, pageSize, currentPage, searchValue } = this.state;

    return (
      <React.Fragment>
        <div className="form-row">
          <div className="col form-group">
            <form onSubmit={this.handleFormSubmit}>
              <label htmlFor="searchBook">Search Customer</label>
              <input
                type="text"
                id="searchCustomer"
                placeholder="Search by customer email"
                className="form-control"
                value={searchValue}
                onChange={this.handleSearchKeyword}
              />
            </form>
          </div>
        </div>
        {data ? (
          <CreateTable
            columns={this.columns}
            data={data}
            pageSize={pageSize}
            currentPage={currentPage}
            handlePageChange={this.handlePageChange}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default SearchCustomer;
