import { CHANGE_AUTH } from "./constants";

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    isLoggedIn
  };
}
