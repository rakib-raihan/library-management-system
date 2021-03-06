import React, { Component } from "react";
import DatePicker from "react-datepicker";
import CreateCheckbox from "../../../module/CreateCheckbox";
import CreateInputField from "../../../module/CreateInputField";
import CreateSubmitButton from "../../../module/CreateSubmitButton";
import PageTitle from "../../../module/PageTitle";

class AddNewAdmin extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      preAddress: "",
      perAddress: "",
      dob: new Date(),
      phone: "",
      nid: "",
      email: "",
      password: "",
      accessLevel: "staff",
    },
    controls: {
      accessLevelChecked: false,
    },
  };

  resetFormData = () => {
    this.setState({
      data: {
        firstName: "",
        lastName: "",
        preAddress: "",
        perAddress: "",
        dob: new Date(),
        phone: "",
        nid: "",
        email: "",
        password: "",
        accessLevel: "staff",
      },
      controls: {
        accessLevelChecked: false,
      },
    });
  };

  handleInputChange = (e) => {
    let data = this.state.data;
    let controls = this.state.controls;
    if (e.target) {
      if (e.target.id === "accessLevel") {
        if (e.target.value === "staff") {
          data["accessLevel"] = "admin";
          controls.accessLevelChecked = true;
        } else {
          data["accessLevel"] = "staff";
          controls.accessLevelChecked = false;
        }
        this.setState({
          controls,
        });
      } else {
        data[e.target.id] = e.target.value;
      }
    } else {
      data["dob"] = e;
    }
    console.log(data.accessLevel);
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
      firstName,
      lastName,
      preAddress,
      perAddress,
      dob,
      phone,
      nid,
      email,
      password,
      accessLevel,
    } = this.state.data;

    return (
      <React.Fragment>
        {PageTitle("Add New Admin")}
        <div className="page-content">
          <div className="row">
            <div className="col-6">
              <form onSubmit={this.handleFormSubmit}>
                <CreateInputField
                  label="First Name"
                  type="text"
                  id="firstName"
                  autoFocus
                  value={firstName}
                  onChange={this.handleInputChange}
                />
                <CreateInputField
                  label="Last Name"
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={this.handleInputChange}
                />
                <CreateInputField
                  label="Present Address"
                  type="textarea"
                  id="preAddress"
                  value={preAddress}
                  onChange={this.handleInputChange}
                />
                <CreateInputField
                  label="Permanent Address"
                  type="textarea"
                  id="perAddress"
                  value={perAddress}
                  onChange={this.handleInputChange}
                />
                <div className="form-row">
                  <div className="col form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <DatePicker
                      selected={dob}
                      onChange={this.handleInputChange}
                      id="dob"
                      className="form-control"
                    />
                  </div>
                </div>
                <CreateInputField
                  label="Phone"
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={this.handleInputChange}
                />
                <CreateInputField
                  label="NID"
                  type="text"
                  id="nid"
                  value={nid}
                  onChange={this.handleInputChange}
                />
                <CreateInputField
                  label="Email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={this.handleInputChange}
                />
                <CreateInputField
                  label="Password"
                  type="text"
                  id="password"
                  value={password}
                  onChange={this.handleInputChange}
                />
                <div className="form-row">
                  <div className="col form-group">
                    <div className="form-check form-check-inline">
                      <CreateCheckbox
                        label="Set role to Admin"
                        id="accessLevel"
                        type="checkbox"
                        value={accessLevel}
                        checked={this.state.controls.accessLevelChecked}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <CreateSubmitButton
                  title="Create Admin"
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

export default AddNewAdmin;
