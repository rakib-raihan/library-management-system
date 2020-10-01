import React, { Component } from "react";
import { getAuthors } from "../../../../data/Author";
import CreateTable from "../../../../module/CreateTable";

class DisplayAuthor extends Component {
  state = {
    data: getAuthors(),
    pageSize: 5,
    currentPage: 1,
  };

  columns = [
    { path: "name", label: "Name" },
    { path: "books", label: "Books" },
    {
      key: "delete",
      content: (author) => (
        <button
          className="btn btn-danger"
          onClick={() => this.handleDelete(author)}
        >
          Delete
        </button>
      ),
    },
    {
      key: "edit",
      content: (author) => (
        <button
          className="btn btn-primary"
          onClick={() => this.handleEdit(author)}
        >
          Edit
        </button>
      ),
    },
  ];

  handleDelete = (cat) => {
    console.log("Delete:", cat);
  };

  handleEdit = (cat) => {
    console.log("Edit:", cat);
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    const { data, currentPage, pageSize } = this.state;
    return (
      <React.Fragment>
        <CreateTable
          columns={this.columns}
          data={data}
          pageSize={pageSize}
          currentPage={currentPage}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handlePageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default DisplayAuthor;
