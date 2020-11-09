import { getCategories } from "../../data/Category";

const initState = {
  categories: getCategories(),
};

const categoryReducer = (state = initState, action) => {
  switch (action) {
    default:
      return state;
  }
};

export default categoryReducer;
