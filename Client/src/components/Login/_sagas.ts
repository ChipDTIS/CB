import { LOGIN_SUCCESS, LOGIN_ACTION } from "src/components/Login/_actions";
import { put, takeLatest } from "redux-saga/effects";
import { push } from "react-router-redux";

// tslint:disable-next-line:no-any
function* doLogin(action: any) {
    yield put({ type: LOGIN_SUCCESS });
}
// tslint:disable-next-line:no-any
function* doSuccess(action: any) {
    console.log("dosuccess");
    yield put(push("/"));
}

export function* runner() {
    yield takeLatest(LOGIN_ACTION, doLogin);
    yield takeLatest(LOGIN_SUCCESS, doSuccess);
}