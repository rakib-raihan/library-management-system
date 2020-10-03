import React, { Component } from "react";
import CreateInputField from "../../../../module/CreateInputField";
import CreateSubmitButton from "../../../../module/CreateSubmitButton";
import SubTitle from "../../../../module/SubTitle";

class CreatePublisher extends Component {
  state = {
    data: {
      title: "",
      desc: "",
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
        title: "",
        desc: "",
      },
    });
  };

  render() {
    const { title, desc } = this.state.data;
    return (
      <div className="card create-author-form">
        <div className="card-header">{SubTitle("Add New Publisher")}</div>
        <div className="card-body">
          <form>
            <CreateInputField
              label="Publisher Title"
              type="text"
              id="title"
              autoFocus
              value={title}
              onChange={this.handleInputChange}
            />
            <CreateInputField
              label="About Publisher"
              type="textarea"
              id="desc"
              value={desc}
              onChange={this.handleInputChange}
            />
            <CreateSubmitButton
              title="Create Publisher"
              onClick={this.handleFormSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default CreatePublisher;
