import * as t from "./getUser.types";

export const actionRequestGetUser = (payload) => {
  return {
    type: t.REQUEST_GET_USER,
    payload,
  };
};

export const actionRequestGetUserInit = () => {
  return {
    type: t.REQUEST_GET_USER_INIT,
  };
};

export const actionReceiveGetUserSuccess = (data) => {
  return {
    type: t.RECEIVE_GET_USER_SUCCESS,
    data,
  };
};

export const actionReceiveGetUserError = (data) => {
  return {
    type: t.RECEIVE_GET_USER_ERROR,
    data,
  };
};
