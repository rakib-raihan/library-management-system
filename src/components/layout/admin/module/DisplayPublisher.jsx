import React, { Component } from "react";
import { getPublishers } from "../../../../services/publisherServices";
import CreateTable from "../../../../module/CreateTable";

class DisplayPublisher extends Component {
  state = {
    data: [],
    pageSize: 5,
    currentPage: 1,
  };

  columns = [
    { path: "name", label: "Name" },
    { path: "about", label: "About" },
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

  // Database operation
  async componentDidMount() {
    const { data } = await getPublishers();

    this.setState({
      data,
    });
  }

  render() {
    const { data, currentPage, pageSize } = this.state;

    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default DisplayPublisher;
