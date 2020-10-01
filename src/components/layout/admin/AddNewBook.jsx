import React, { Component } from "react";
import CreateInputField from "../../../module/CreateInputField";
import CreateSubmitButton from "../../../module/CreateSubmitButton";
import PageTitle from "../../../module/PageTitle";

class AddNewBook extends Component {
  state = {
    data: {
      title: "",
      desc: "",
      pages: "",
      price: "",
      author: "",
      category: "",
      publisher: "",
    },
  };

  resetFormData = () => {
    this.setState({
      data: {
        title: "",
        desc: "",
        pages: "",
        price: "",
        author: "",
        category: "",
        publisher: "",
      },
    });
  };

  handleInputChange = (e) => {
    let data = this.state.data;
    data[e.target.id] = e.target.value;
    this.setState({
      data,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.data);
    this.resetFormData();
  };

  render() {
    const {
      title,
      desc,
      pages,
      price,
      author,
      category,
      publisher,
    } = this.state.data;
    return (
      <React.Fragment>
        {PageTitle("Add New Book")}
        <div className="add-new-book">
          <div className="row">
            <div className="col-6">
              <form action="">
                <CreateInputField
                  label="Title"
                  type="text"
                  id="title"
                  autoFocus
                  value={title}
                  onChange={this.handleInputChange}
                />
                <CreateInputField
                  label="Description"
                  type="textarea"
                  id="desc"
                  value={desc}
                  onChange={this.handleInputChange}
                />
                <CreateInputField
                  label="Pages"
                  type="number"
                  id="pages"
                  value={pages}
                  onChange={this.handleInputChange}
                />
                <CreateInputField
                  label="Price"
                  type="number"
                  id="price"
                  value={price}
                  onChange={this.handleInputChange}
                />
                <CreateInputField
                  label="Author"
                  type="text"
                  id="author"
                  value={author}
                  onChange={this.handleInputChange}
                />
                <CreateInputField
                  label="Category"
                  type="text"
                  id="category"
                  value={category}
                  onChange={this.handleInputChange}
                />
                <CreateInputField
                  label="Publisher"
                  type="text"
                  id="publisher"
                  value={publisher}
                  onChange={this.handleInputChange}
                />
                <CreateSubmitButton
                  title="Create Book"
                  onClick={this.handleFormSubmit}
                />
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddNewBook;
