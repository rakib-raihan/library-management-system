import React from "react";

const TableHeader = ({ columns }) => {
  const header = columns.map((item) => {
    return (
      <th key={item.path || item.key} scope="col">
        {item.label}
      </th>
    );
  });

  return (
    <React.Fragment>
      <thead className="thead-dark">
        <tr>{header}</tr>
      </thead>
    </React.Fragment>
  );
};

export default TableHeader;
