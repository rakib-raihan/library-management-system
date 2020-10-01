import React, { Component } from "react";
import CreateInputField from "../../../../module/CreateInputField";
import CreateSubmitButton from "../../../../module/CreateSubmitButton";
import SubTitle from "../../../../module/SubTitle";

class CreateAuthor extends Component {
  state = {
    data: {
      name: "",
      about: "",
    },
  };

  handleInputChange = (e) => {
    const data = this.state.data;
    data[e.target.id] = e.target.value;
    this.setState({ data });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.data);
    this.resetFormData();
  };

  resetFormData = () => {
    this.setState({
      data: {
        name: "",
        about: "",
      },
    });
  };

  render() {
    const { name, about } = this.state.data;
    return (
      <div className="card create-author-form">
        <div className="card-header">{SubTitle("Add New Author")}</div>
        <div className="card-body">
          <form>
            <CreateInputField
              label="Author Name"
              type="text"
              id="name"
              autoFocus
              value={name}
              onChange={this.handleInputChange}
            />
            <CreateInputField
              label="About Author"
              type="textarea"
              id="about"
              value={about}
              onChange={this.handleInputChange}
            />
            <CreateSubmitButton
              title="Create Author"
              onClick={this.handleFormSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default CreateAuthor;
