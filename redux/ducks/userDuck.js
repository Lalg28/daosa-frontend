//Types
export const USER_LOGIN_TRY = "USER_LOGIN_TRY";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS"

//Initial State
const initialState = {
  jwt: undefined,
  user: {},
  loading: false,
  error: null,
};

//Reducer
export default function userReducer(state = initialState, { type, payload }) {
  console.log(payload);
  switch (type) {
    case USER_LOGIN_TRY:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, jwt: payload.jwt, user: payload.user, loading: false };
    case USER_LOGIN_FAILED:
      return { ...state, loading: false, error: payload };
    case USER_LOGOUT_SUCCESS:
        return {...initialState}
    default:
      return state;
  }
}

//Actions
export function loginUser(data) {
  return { type: USER_LOGIN_TRY, user: data };
}

export function loginUserStorage() {
  if (localStorage.getItem("usuario")) {
    return {
      type: USER_LOGIN_SUCCESS,
      payload: JSON.parse(localStorage.getItem("usuario")),
    };
  }else{
      return {type: USER_LOGIN_FAILED, payload: 'No se encontro usuario'}
  }
}

export function logoutUser(){
    localStorage.removeItem('usuario')
    return {type: USER_LOGOUT_SUCCESS}
}


