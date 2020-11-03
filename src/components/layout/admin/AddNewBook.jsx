import React, { Component } from "react";
import CreateInputField from "../../../module/CreateInputField";
import CreateSubmitButton from "../../../module/CreateSubmitButton";
import PageTitle from "../../../module/PageTitle";
import Select from "react-dropdown-select";

class AddNewBook extends Component {
  testData = [
    { label: "Albania", value: 355, key: 1 },
    { label: "Argentina", value: 54, key: 11 },
    { label: "Austria", value: 43, key: 111 },
    { label: "Cocos Islands", value: 61, key: 1111 },
    { label: "Kuwait", value: 965, key: 11111 },
    { label: "Sweden", value: 46, key: 111111 },
    { label: "Venezuela", value: 58, key: 1111111 },
  ];

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

  handleAuthorSelection = (e) => {
    const data = this.state.data;
    data.author = e[0].value;
    this.setState({
      data,
    });
  };

  handleCategorySelection = (e) => {
    const data = this.state.data;
    data.category = e[0].value;
    this.setState({
      data,
    });
  };

  handlePublisherSelection = (e) => {
    const data = this.state.data;
    data.publisher = e[0].value;
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
                <div className="form-row">
                  <div className="col form-group">
                    <label>Author</label>
                    <Select
                      options={this.testData}
                      onChange={this.handleAuthorSelection}
                      placeholder="Select Author"
                      className="form-control custom-input"
                      labelField="label"
                      dropdownPosition="auto"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col form-group">
                    <label>Category</label>
                    <Select
                      options={this.testData}
                      onChange={this.handleCategorySelection}
                      name={this.testData.value}
                      placeholder="Select Category"
                      className="form-control custom-input"
                      labelField="label"
                      dropdownPosition="auto"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col form-group">
                    <label>Publisher</label>
                    <Select
                      options={this.testData}
                      onChange={this.handlePublisherSelection}
                      name={this.testData.value}
                      placeholder="Select Publisher"
                      className="form-control custom-input"
                      labelField="label"
                      dropdownPosition="auto"
                    />
                  </div>
                </div>
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
