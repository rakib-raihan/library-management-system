import React, { Component } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "../utils/Pagination";
import TableBody from "./layout/TableBody";
import TableHeader from "./layout/TableHeader";

class CreateTable extends Component {
  render() {
    const {
      columns,
      data,
      pageSize,
      currentPage,
      handlePageChange,
    } = this.props;

    const currentData = paginate(data, currentPage, pageSize);

    return (
      <React.Fragment>
        <table className="table table-hover">
          <TableHeader columns={columns} />
          <TableBody data={currentData} columns={columns} />
        </table>
        <Pagination
          itemsCount={data.length}
          pageSize={pageSize}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default CreateTable;
