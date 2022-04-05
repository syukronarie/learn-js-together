import { call, put, takeLatest } from "redux-saga/effects";

import * as a from "./getUser.actions";
import * as t from "./getUser.types";
import { apiGetUser } from "./getUser.apis";

export function* getUser() {
  try {
    const response = yield call(apiGetUser);
    yield put(a.actionReceiveGetUserSuccess(response.data));
  } catch (err) {
    yield put(a.actionReceiveGetUserError(err));
  }
}

export function* GetUser() {
  yield takeLatest(t.REQUEST_GET_USER, getUser);
}
