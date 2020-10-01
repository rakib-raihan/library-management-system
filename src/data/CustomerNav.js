export default () => {
  return [
    {
      title: "Dashboard",
      icon: "bx bx-home-alt",
      to: "/dashboard",
      component: "Dashboard",
    },
    {
      title: "Statistics",
      icon: "bx bx-note",
      to: "/issue-book",
      component: "IssueBook",
    },
    {
      title: "Request Book",
      icon: "bx bx-book-bookmark",
      to: "/all-book",
      component: "AllBook",
    },
  ];
};
