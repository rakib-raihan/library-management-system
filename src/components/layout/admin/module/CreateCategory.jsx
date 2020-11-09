import React, { Component } from "react";
import CreateSubmitButton from "../../../../module/CreateSubmitButton";
import CreateInputField from "../../../../module/CreateInputField";
import SubTitle from "../../../../module/SubTitle";
import { createCategory } from "../../../../services/categoryServices";
import { toast } from "react-toastify";

class CreateCategory extends Component {
  state = {
    data: {
      name: "",
    },
  };

  handleInputChange = (e) => {
    let data = this.state.data;
    data[e.target.id] = e.target.value;
    this.setState({
      data,
    });
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const { data } = await createCategory(this.state.data);
    if (data) {
      toast.success(`Category "${data.name}" created successfully!`);
      this.resetFormData();
    }
  };

  resetFormData = () => {
    this.setState({
      data: {
        name: "",
      },
    });
  };

  render() {
    const { name } = this.state.data;
    return (
      <div className="card create-category-form">
        <div className="card-header">{SubTitle("Add New Category")}</div>
        <div className="card-body">
          <form>
            <CreateInputField
              label="Categoty Name"
              type="text"
              id="name"
              autoFocus
              value={name}
              onChange={this.handleInputChange}
            />
            <CreateSubmitButton
              title="Create Category"
              onClick={this.handleFormSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default CreateCategory;
