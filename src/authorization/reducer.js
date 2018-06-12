import { CHANGE_AUTH } from "./constants";

export default function(state = { loggedIn: false }, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return {
        loggedIn: !state.loggedIn
      };

    default:
      return state;
  }
}
