import { combineReducers } from "redux";
import authorReducer from "./author";
import bookReducer from "./book";
import categoryReducer from "./category";
import customerReducer from "./customer";
import issueReducer from "./issue";
import publisherReducer from "./publisher";

const rootReducer = combineReducers({
  book: bookReducer,
  customer: customerReducer,
  category: categoryReducer,
  author: authorReducer,
  publisher: publisherReducer,
  issue: issueReducer,
});

export default rootReducer;
