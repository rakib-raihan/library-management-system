import React, { Component } from "react";
import { getPublisher } from "../../../../data/Publisher";
import CreateTable from "../../../../module/CreateTable";

class DisplayPublisher extends Component {
  state = {
    data: getPublisher(),
    pageSize: 5,
    currentPage: 1,
  };

  columns = [
    { path: "title", label: "Title" },
    { path: "books", label: "Books" },
    {
      key: "delete",
      content: (publisher) => (
        <button
          className="btn btn-danger"
          onClick={() => this.handleDelete(publisher)}
        >
          Delete
        </button>
      ),
    },
    {
      key: "edit",
      content: (publisher) => (
        <button
          className="btn btn-primary"
          onClick={() => this.handleEdit(publisher)}
        >
          Edit
        </button>
      ),
    },
  ];

  handleDelete = (publisher) => {
    console.log("Delete:", publisher);
  };

  handleEdit = (publisher) => {
    console.log("Edit:", publisher);
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

export default DisplayPublisher;
