import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AddNewBook from "./layout/admin/AddNewBook";
import AddNewCustomer from "./layout/admin/AddNewCustomer";
import AllBook from "./layout/admin/AllBook";
import AllCustomer from "./layout/admin/AllCustomer";
import Dashboard from "./layout/admin/Dashboard";
import IssueBook from "./layout/admin/IssueBook";
import ManageAuthor from "./layout/admin/ManageAuthor";
import ManageCategory from "./layout/admin/ManageCategory";
import ManagePublisher from "./layout/admin/ManagePublisher";
import Profile from "./layout/common/Profile";

export class Content extends Component {
  render() {
    return (
      <main className="col-12 col-md-9 col-xl-10 py-md-3 pl-md-5 pt-3 pr-md-4 main">
        <div className="page-content">
          <Switch>
            <Route path="/dashboard/overview" component={Dashboard} />
            <Route path="/dashboard/issue-book" component={IssueBook} />
            <Route path="/dashboard/all-book" component={AllBook} />
            <Route path="/dashboard/add-new-book" component={AddNewBook} />
            <Route
              path="/dashboard/manage-category"
              component={ManageCategory}
            />
            <Route path="/dashboard/manage-author" component={ManageAuthor} />
            <Route
              path="/dashboard/manage-publisher"
              component={ManagePublisher}
            />
            <Route path="/dashboard/all-customer" component={AllCustomer} />
            <Route
              path="/dashboard/add-new-customer"
              component={AddNewCustomer}
            />
            <Route path="/dashboard/profile" component={Profile} />
            <Redirect to="/dashboard/overview" />
          </Switch>
        </div>
      </main>
    );
  }
}

export default Content;
