import { combineReducers } from "redux";
import increment from "../states/increment/incrementReducers";
import user from "../states/getUsers/getUser.reducers";

export default combineReducers({
  increment,
  user,
});
