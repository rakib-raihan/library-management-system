import { getAuthors } from "../../data/Author";

const initState = {
  authors: getAuthors(),
};

const authorReducer = (state = initState, action) => {
  switch (action) {
    default:
      return state;
  }
};

export default authorReducer;
