import { REGISTER_SUCCESS, LOGIN_SUCCESS, USER_LOADED, REGISTER_FAIL,AUTH_ERROR,LOGIN_FAIL, LOGOUT } from "../types";

export default (state, action) => {
  switch(action.type){
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload.data
      };

      case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
          localStorage.removeItem("token");
          return {
            ...state,
            token: null,
            isAuthenticated: false,
            loading: false,
            user: null,
            error: action.payload
          };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return{
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      }
    default:
      return state;
  }
}