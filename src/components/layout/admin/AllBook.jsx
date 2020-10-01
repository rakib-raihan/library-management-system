import React, { Component } from "react";
import CreateTable from "../../../module/CreateTable";
import PageTitle from "../../../module/PageTitle";
import { getBooks } from "../../../data/Book";

class AllBook extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "author_id", label: "Author" },
    { path: "publisher", label: "Publisher" },
    { path: "avail_copy", label: "Available" },
    { path: "price", label: "Price" },
    {
      key: "delete",
      content: (book) => (
        <button
          className="btn btn-danger"
          onClick={() => this.handleDelete(book)}
        >
          Delete
        </button>
      ),
    },
    {
      key: "edit",
      content: (book) => (
        <button
          className="btn btn-primary"
          onClick={() => this.handleEdit(book)}
        >
          Edit
        </button>
      ),
    },
  ];

  state = {
    data: getBooks(),
    pageSize: 10,
    currentPage: 1,
  };

  handleDelete = (book) => {
    console.log("Delete:", book);
  };

  handleEdit = (book) => {
    console.log("Edit:", book);
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
        {PageTitle("All Book")}
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

export default AllBook;
