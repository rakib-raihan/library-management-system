import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <React.Fragment>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => (
                <td key={item.id + column.path || column.key}>
                  {this.renderCell(item, column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </React.Fragment>
    );
  }
}

export default TableBody;
