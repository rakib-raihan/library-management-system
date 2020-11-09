import { getPublisher } from "../../data/Publisher";

const initState = {
  publishers: getPublisher(),
};

const publisherReducer = (state = initState, action) => {
  switch (action) {
    default:
      return state;
  }
};

export default publisherReducer;
