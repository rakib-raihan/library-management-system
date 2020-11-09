import React, { Component } from "react";
import { getCategories } from "../../../../services/categoryServices";
import CreateTable from "../../../../module/CreateTable";

class DisplayCategory extends Component {
  state = {
    data: [],
    pageSize: 5,
    currentPage: 1,
  };

  columns = [
    { path: "name", label: "Name" },
    {
      key: "delete",
      content: (cat) => (
        <button
          className="btn btn-danger"
          onClick={() => this.handleDelete(cat)}
        >
          Delete
        </button>
      ),
    },
    {
      key: "edit",
      content: (cat) => (
        <button
          className="btn btn-primary"
          onClick={() => this.handleEdit(cat)}
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

  // DB Operation
  async componentDidMount() {
    const { data } = await getCategories();

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

export default DisplayCategory;
