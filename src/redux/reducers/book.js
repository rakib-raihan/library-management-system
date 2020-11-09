import { getBooks } from "../../data/Book";

const initState = {
  books: getBooks(),
  book: [],
};

const bookReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default bookReducer;
