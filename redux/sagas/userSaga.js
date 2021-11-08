import { put, call, takeEvery } from "redux-saga/effects";
import { loginUserAPI } from "../../api/user";
import {
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_TRY,
} from "../ducks/userDuck";

function* loginUser({ user }) {
  try {
    const res = yield call(loginUserAPI, user);
    localStorage.setItem(
      "usuario",
      JSON.stringify({
        jwt: res.jwt,
        user: {
          userId: res.user.id,
          nombre: res.user.username,
        },
      })
    );
    yield put({ type: USER_LOGIN_SUCCESS, payload: res });
  } catch (error) {
    yield put({ type: USER_LOGIN_FAILED, payload: error });
  }
}

export default function* userSaga() {
  yield takeEvery(USER_LOGIN_TRY, loginUser)
}
