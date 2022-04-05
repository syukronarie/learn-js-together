import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import reducers from "./reducers";
import { watchSagas } from "./sagas";

const saga = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) || compose;

const enhancer = composeEnhancers(applyMiddleware(saga));

const store = createStore(reducers, enhancer);

saga.run(watchSagas);

export default store;
