import React, { Component } from "react";
import { getBooks } from "../data/Book";
import CreateTable from "../module/CreateTable";

class SearchBook extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "author_id", label: "Author" },
    {
      key: "select",
      content: (book) => (
        <button
          className="btn btn-success"
          onClick={() => this.props.handleSelectBook(book)}
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
    const data = getBooks().filter((book) => {
      return book.title.includes(this.state.searchValue);
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
              <label htmlFor="searchBook">Search Book</label>
              <input
                type="text"
                id="searchBook"
                placeholder="Search by book title"
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

export default SearchBook;
