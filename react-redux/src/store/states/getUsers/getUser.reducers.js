import * as t from "./getUser.types";

const INITIAL_STATE = {
  success: false,
  error: false,
  data: [],
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case t.REQUEST_GET_USER_INIT:
      return INITIAL_STATE;
    case t.RECEIVE_GET_USER_SUCCESS:
      return {
        success: true,
        error: false,
        data: action.data.data,
      };
    case t.RECEIVE_GET_USER_ERROR:
      return {
        ...action.data,
        success: false,
        error: true,
      };
    default:
      return state;
  }
}
