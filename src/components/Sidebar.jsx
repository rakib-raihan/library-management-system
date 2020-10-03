import React from "react";
import AdminNav from "../data/AdminNav";
import NavGenerator from "../module/NavGenerator";

const SidebarAdmin = () => {
  return (
    <aside className="col-xl-2 col-md-3 col-12 pt-4 pb-4 d-none d-md-block sidebar">
      <ul className="nav flex-column sidebar__nav">{NavGenerator(AdminNav)}</ul>
    </aside>
  );
};

export default SidebarAdmin;
