import React, { Component } from "react";
import { getAuthors } from "../../../../services/authorServices";
import CreateTable from "../../../../module/CreateTable";

class DisplayAuthor extends Component {
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

  // Database operation
  async componentDidMount() {
    const { data } = await getAuthors();

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

export default DisplayAuthor;
