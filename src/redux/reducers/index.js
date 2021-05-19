import { combineReducers } from "redux";
import booksReducer from "./books.reducer";
import authReducer from "./auth.reducer";

export default combineReducers({
    books: booksReducer,
    auth: authReducer
});