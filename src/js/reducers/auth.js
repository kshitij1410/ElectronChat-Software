import { combineReducers } from "redux";
import { createErrorReducer,createIsFetchingReducer  } from "./common";

// function loginReducer(state = { error: null }, action) {
//   switch (action.type) {
//     case "AUTH_LOGIN_INIT":
//       return { error: null };
//     case "AUTH_LOGIN_ERROR":
//       return { error: action.error };
//     default:
//       return state;
//   }
// }

// function createLoginReducer() {
//   const error = (state = null, action) => {
//     switch (action.type) {
//       case "AUTH_LOGIN_INIT":
//         return null;
//       case "AUTH_LOGIN_ERROR":
//         return action.error;
//       default:
//         return state;
//     }
//   };

//   return combineReducers({
//     error,
//   });
// }

const createLoginReducer = () =>
  combineReducers({
    isChecking: createIsFetchingReducer('AUTH_LOGIN'),
    error: createErrorReducer("AUTH_LOGIN"),
  });

// function registerReducer(state = { error: null }, action) {
//   switch (action.type) {
//     case "AUTH_REGISTER_INIT":
//       return { error: null };
//     case "AUTH_REGISTER_ERROR":
//       return { error: action.error };
//     default:
//       return state;
//   }

// }

// function createRegisterReducer() {
//   const error = (state = null, action) => {
//     switch (action.type) {
//       case "AUTH_REGISTER_INIT":
//         return null;
//       case "AUTH_REGISTER_ERROR":
//         return action.error;
//       default:
//         return state;
//     }
//   };
//   return combineReducers({
//     error
//   });
// }

const createRegisterReducer = () =>
  combineReducers({
    isChecking: createIsFetchingReducer('AUTH_REGISTER'),
    error: createErrorReducer("AUTH_REGISTER")
  });

function createAuthReducer() {
  const user = (state = null, action) => {
    switch (action.type) {
      case "AUTH_ON_ERROR":
      case "AUTH_ON_INIT":
        return null;
      case "AUTH_ON_SUCCESS":
      case "AUTH_REGISTER_SUCCESS":
      case "AUTH_LOGIN_SUCCESS":
        return action.user;
      default:
        return state;
    }
  };

  // const isChecking = (state = false, action) => {
  //   switch (action.type) {
  //     case "AUTH_ON_INIT":
  //     case "AUTH_REGISTER_INIT":
  //     case "AUTH_LOGIN_INIT":
  //       return true;
  //     case "AUTH_ON_ERROR":
  //     case "AUTH_ON_SUCCESS":
  //     case "AUTH_LOGIN_ERROR":
  //     case "AUTH_REGISTER_ERROR":
  //     case "AUTH_LOGIN_SUCCESS":
  //     case "AUTH_REGISTER_SUCCESS":
  //       return false;
  //     default:
  //       return state;
  //   }
  // };

  // return combineReducers({
  //   user,
  //   isChecking,
  //   login: loginReducer,
  //   register: registerReducer,
  // });

  return combineReducers({
    user,
    isChecking:createIsFetchingReducer('AUTH_ON'),
    login: createLoginReducer(),
    register: createRegisterReducer(),
  });
}

export default createAuthReducer();

// const DEFAULT_STATE = {
//   user: null,
//   isChecking: false,
// };

// export default function authReducer(state = DEFAULT_STATE, action) {
//   switch (action.type) {
//     case "AUTH_REGISTER_INIT":
//     case "AUTH_LOGIN_INIT":
//       return { ...state, isChecking: true };
//     case "AUTH_REGISTER_SUCCESS":
//     case "AUTH_LOGIN_SUCCESS":
//       return { ...state, isChecking: false };
//     case "AUTH_ON_INIT":
//       return { user: null, isChecking: true };
//     case "AUTH_ON_SUCCESS":
//       return { user: action.user, isChecking: false };
//     case "AUTH_ON_ERROR":
//       return { user: null, isChecking: false };
//     default:
//       return state;
//   }
// }
