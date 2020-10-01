export default () => {
  return [
    {
      title: "Dashboard",
      icon: "bx bx-home-alt",
      to: "/dashboard/overview",
      component: "Dashboard",
    },
    {
      title: "Issue Book",
      icon: "bx bx-note",
      to: "/dashboard/issue-book",
      component: "IssueBook",
    },
    {
      header: "Book",
    },
    {
      title: "All Book",
      icon: "bx bx-book-bookmark",
      to: "/dashboard/all-book",
      component: "AllBook",
    },
    {
      title: "Add New Book",
      icon: "bx bx-book-add",
      to: "/dashboard/add-new-book",
      component: "AddNewBook",
    },
    {
      title: "Manage Category",
      icon: "bx bx-layer",
      to: "/dashboard/manage-category",
      component: "ManageCategory",
    },
    {
      title: "Manage Author",
      icon: "bx bx-pencil",
      to: "/dashboard/manage-author",
      component: "ManageAuthor",
    },
    {
      title: "Manage Publisher",
      icon: "bx bx-printer",
      to: "/dashboard/manage-publisher",
      component: "ManageCategory",
    },
    {
      header: "Customer",
    },
    {
      title: "All Customer",
      icon: "bx bx-user",
      to: "/dashboard/all-customer",
      component: "AllCustomer",
    },
    {
      title: "Add New Customer",
      icon: "bx bx-user-plus",
      to: "/dashboard/add-new-customer",
      component: "AddNewCustomer",
    },
  ];
};
