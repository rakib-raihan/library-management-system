import React, { Component } from "react";
import PageTitle from "../../../module/PageTitle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CreateInputField from "../../../module/CreateInputField";
import CreateSubmitButton from "../../../module/CreateSubmitButton";
import SearchBook from "../../../utils/SearchBook";
import SearchCustomer from "../../../utils/SearchCustomer";
import setDate from "../../../utils/setDate";

class IssueBook extends Component {
  state = {
    data: {
      minDate: setDate(5),
      returnDate: new Date(),
      bookID: "",
      customerID: "",
      regDate: new Date(),
      price: 0,
      note: "",
    },
    selected: "book",
    info: {
      bookTitle: "",
      customerName: "",
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
      selected: "book",
      info: {
        bookTitle: "",
        customerName: "",
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

  handleSelectMode = (selected) => {
    this.setState({
      selected,
    });
  };

  handleSelectBook = (book) => {
    const data = this.state.data;
    data.bookID = book.id;
    this.setState({
      data,
    });

    const info = this.state.info;
    info.bookTitle = book.title;
    this.setState({
      info,
    });
  };

  handleSelectCustomer = (customer) => {
    const data = this.state.data;
    data.customerID = customer.id;
    this.setState({
      data,
    });

    const info = this.state.info;
    info.customerName = customer.first_name;
    this.setState({
      info,
    });
  };

  dChange = (e) => {
    console.log(e);
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
    const { bookTitle, customerName } = this.state.info;
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
                  autoFocus={true}
                  value={bookID}
                  onChange={this.handleInputChange}
                  onClick={() => this.handleSelectMode("book")}
                />
                {bookTitle ? (
                  <p className="font-italic">
                    Book Title: <span className="text-info">{bookTitle}</span>
                  </p>
                ) : null}
                <CreateInputField
                  label="Customer ID"
                  type="text"
                  id="customerID"
                  value={customerID}
                  onChange={this.handleInputChange}
                  onClick={() => this.handleSelectMode("customer")}
                />
                {customerName ? (
                  <p className="font-italic">
                    Customer Name:{" "}
                    <span className="text-info">{customerName}</span>
                  </p>
                ) : null}
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
            <div className="col-6">
              {this.state.selected === "book" ? (
                <SearchBook handleSelectBook={this.handleSelectBook} />
              ) : (
                <SearchCustomer
                  handleSelectCustomer={this.handleSelectCustomer}
                />
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default IssueBook;
