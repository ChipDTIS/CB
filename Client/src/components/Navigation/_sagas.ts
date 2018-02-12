import { GET_CURRENT_USER, GET_CURRENT_USER_SUCCESS } from "./_actions";
import { put, takeLatest, call } from "redux-saga/effects";
import { UserServiceInstance } from "../../services/UserServices";

function* doGetCurrentUser(action: any) {
    let result = yield call([UserServiceInstance, UserServiceInstance.GetCurrentUser]);
    console.log(result);
    yield put({ type: GET_CURRENT_USER_SUCCESS, apitest: result });
}

export function* runner() {
    yield takeLatest(GET_CURRENT_USER, doGetCurrentUser);
    // yield takeLatest(GET_CURRENT_USER_SUCCESS, doGetCurrentUserSuccess);
}
