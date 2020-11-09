import React, { Component } from "react";
import CreateTable from "../../../module/CreateTable";
import PageTitle from "../../../module/PageTitle";
import { getIssues } from "../../../services/issueServices";

class IssueReturn extends Component {
  columns = [
    { path: "_id", label: "ID" },
    { path: "book_id", label: "Book ID" },
    { path: "customer_id", label: "Customer ID" },
    {
      key: "issue",
      content: (issue) => (
        <button
          className="btn btn-primary"
          onClick={() => this.handleIssueReturn(issue)}
        >
          Issue Return
        </button>
      ),
    },
  ];

  state = {
    data: [],
    pageSize: 10,
    currentPage: 1,
    searchValue: "",
  };

  handleIssueReturn = (issue) => {
    console.log("Issue Return:", issue);
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  handleSearchFormSubmit = (e) => {
    e.preventDefault();
    const keyword = parseInt(this.state.searchValue);
    const data = this.props.issues.filter((item) => {
      return item.id == keyword;
    });

    this.setState({
      data,
    });
  };

  handleSearchKeyword = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
    console.log(this.state.searchValue);
  };

  // Database operation
  async componentDidMount() {
    const { data } = await getIssues();

    this.setState({
      data,
    });
  }

  render() {
    const { data, pageSize, currentPage, searchValue } = this.state;
    return (
      <React.Fragment>
        {PageTitle("Issue Return")}
        <div className="page-content">
          <div className="row">
            <div className="col-md-12 pb-3">
              <form onSubmit={this.handleSearchFormSubmit}>
                <label htmlFor="searchBook">Search Issue</label>
                <input
                  type="text"
                  id="searchBook"
                  placeholder="Search by issue ID"
                  className="form-control"
                  value={searchValue}
                  onChange={this.handleSearchKeyword}
                />
              </form>
            </div>
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

export default IssueReturn;
