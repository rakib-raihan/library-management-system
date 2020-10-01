import React, { Component } from "react";
import PageTitle from "../../../module/PageTitle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setDate from "../../../module/setDate";
import CreateInputField from "../../../module/CreateInputField";
import CreateSubmitButton from "../../../module/CreateSubmitButton";

class IssueBook extends Component {
  state = {
    data: {
      minDate: setDate(3),
      returnDate: new Date(),
      bookID: "",
      customerID: "",
      regDate: new Date(),
      price: 0,
      note: "",
    },
  };

  resetFormData = () => {
    this.setState({
      data: {
        minDate: setDate(3),
        returnDate: new Date(),
        bookID: "",
        customerID: "",
        regDate: new Date(),
        price: 0,
        note: "",
      },
    });
  };

  handleInputChange = (e) => {
    let data = this.state.data;
    if (e.target) {
      data[e.target.id] = e.target.value;
    } else {
      data["returnDate"] = e;
    }
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
      bookID,
      customerID,
      price,
      note,
      returnDate,
      minDate,
    } = this.state.data;
    return (
      <React.Fragment>
        {PageTitle("Issue Book")}
        <div className="page-content">
          <div className="row">
            <div className="col-6">
              <form onSubmit={this.handleFormSubmit}>
                <CreateInputField
                  label="Book ID"
                  type="text"
                  id="bookID"
                  autoFocus
                  value={bookID}
                  onChange={this.handleInputChange}
                />
                <CreateInputField
                  label="Customer ID"
                  type="text"
                  id="customerID"
                  value={customerID}
                  onChange={this.handleInputChange}
                />
                <div className="form-row">
                  <div className="col form-group">
                    <label htmlFor="returnDate">Return Date</label>
                    <DatePicker
                      selected={returnDate}
                      onChange={this.handleInputChange}
                      id="returnDate"
                      className="form-control"
                      minDate={minDate}
                    />
                  </div>
                </div>
                <CreateInputField
                  label="Price"
                  type="number"
                  id="price"
                  value={price}
                  onChange={this.resetFormData}
                  disabled
                />
                <CreateInputField
                  label="Note"
                  type="textarea"
                  id="note"
                  placeholder="Additional note"
                  value={note}
                  onChange={this.handleInputChange}
                />
                <CreateSubmitButton
                  title="Issue Book"
                  onClick={this.handleFormSubmit}
                />
              </form>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default IssueBook;
