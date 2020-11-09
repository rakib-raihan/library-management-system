import React, { Component } from "react";
import CreateInputField from "../../../../module/CreateInputField";
import CreateSubmitButton from "../../../../module/CreateSubmitButton";
import SubTitle from "../../../../module/SubTitle";
import { createPublisher } from "../../../../services/publisherServices";
import { toast } from "react-toastify";

class CreatePublisher extends Component {
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

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const { data } = await createPublisher(this.state.data);
    if (data) {
      toast.success(`Publisher "${data.name}" created successfully!`);
      this.resetFormData();
    }
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
        <div className="card-header">{SubTitle("Add New Publisher")}</div>
        <div className="card-body">
          <form>
            <CreateInputField
              label="Publisher Title"
              type="text"
              id="name"
              autoFocus
              value={name}
              onChange={this.handleInputChange}
            />
            <CreateInputField
              label="About Publisher"
              type="textarea"
              id="about"
              value={about}
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
