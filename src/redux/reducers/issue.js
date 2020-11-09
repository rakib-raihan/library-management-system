import { getIssue } from "../../data/IssueBook";

const initState = {
  issues: getIssue(),
};

const issueReducer = (state = initState, action) => {
  switch (action) {
    default:
      return state;
  }
};

export default issueReducer;
