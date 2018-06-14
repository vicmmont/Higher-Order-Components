import { CHANGE_AUTH } from "./constants";

function authorizationReducer(state = { isLoggedIn: false }, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return {
        isLoggedIn: action.isLoggedIn
      };

    default:
      return state;
  }
}

export default authorizationReducer;
