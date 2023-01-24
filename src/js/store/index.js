// import { configureStore, applyMiddleware, combineReducers } from "redux";
// import { thunkMiddleware } from "redux-thunk";
// import chatReducer from "../reducers/chats";

// // export default function dataStore(){

// const middlewares = [thunkMiddleware];

// const store = configureStore(
//   combineReducers({
//     chats: chatReducer,
//   }),
//   applyMiddleware(...middlewares)
// );

// // return store;
// // }

// export default store;


import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from '../reducers/auth';
import chatReducer from '../reducers/chats';
import appReducer from '../reducers/app';

export default function configureStore() {

  const middlewares = [
    thunkMiddleware
  ];


  const store = createStore(
    combineReducers({
      chats: chatReducer,
      auth:authReducer,
      app: appReducer

    }),
    applyMiddleware(...middlewares));

  return store;
}
