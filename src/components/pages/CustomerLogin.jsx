import React, { Component } from "react";
import CreateInputField from "../../module/CreateInputField";
import CreateSubmitButton from "../../module/CreateSubmitButton";

class CustomerLogin extends Component {
  state = {
    login: {
      email: "",
      password: "",
    },
    error: "",
  };

  handleInputChange = (e) => {
    const login = this.state.login;
    login[e.target.id] = e.target.value;
    this.setState({
      login,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.login);
  };

  render() {
    const { email, password } = this.state.login;

    return (
      <React.Fragment>
        <div className="container login-page">
          <div className="d-flex flex-row align-items-center">
            <div className="col-12">
              <div className="login-container">
                <div className="header">
                  <h1>Login</h1>
                </div>
                <div className="body">
                  <form onSubmit={this.handleFormSubmit}>
                    <CreateInputField
                      label="Email"
                      type="email"
                      id="email"
                      autoFocus={true}
                      value={email}
                      onChange={this.handleInputChange}
                    />
                    <CreateInputField
                      label="Password"
                      type="password"
                      id="password"
                      value={password}
                      onChange={this.handleInputChange}
                    />
                    <CreateSubmitButton
                      title="Login"
                      onClick={this.handleFormSubmit}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CustomerLogin;
