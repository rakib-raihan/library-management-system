import { getCustomer } from "../../data/Customer";

const initState = {
  customers: getCustomer(),
};

const customerReducer = (state = initState, action) => {
  switch (action) {
    default:
      return state;
  }
};

export default customerReducer;
