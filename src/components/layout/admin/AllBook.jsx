import React, { Component } from "react";
import CreateTable from "../../../module/CreateTable";
import PageTitle from "../../../module/PageTitle";
import { toast } from "react-toastify";
import { getBooks } from "../../../services/bookServices";

class AllBook extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "data.author.name", label: "Author" },
    { path: "data.publisher.name", label: "Publisher" },
    { path: "data.category.name", label: "Category" },
    { path: "pages", label: "Pages" },
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
    data: [],
    pageSize: 10,
    currentPage: 1,
  };

  handleDelete = (book) => {
    console.log("Delete:", book);
  };

  handleEdit = (book) => {
    toast("Sorry, this feature is not available at the moment!");
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  // Database operation
  async componentDidMount() {
    const { data } = await getBooks();

    this.setState({
      data,
    });
  }

  render() {
    const { data, pageSize, currentPage } = this.state;
    console.log(this.props.books);
    return (
      <React.Fragment>
        {PageTitle("All Book")}
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

export default AllBook;
