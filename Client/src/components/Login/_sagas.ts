import { LOGIN_ACTION, USERNAME_INVALID, USERNAME_VALID, PASSWORD_INVALID, PASSWORD_VALID, USERNAME_VALIDATE, PASSWORD_VALIDATE, LOGIN_SUCCESS } from "src/components/Login/_actions";
import { put, takeLatest } from "redux-saga/effects";
import { Validation } from "src/commons/validate-helper";
// import { channel } from "redux-saga";
// import { push } from "react-router-redux";

// tslint:disable-next-line:no-any
function* doLogin(action: any) {
    let isUserValidate = Validation.isNullOrEmpty(action.Model.UserName);
    let isPasswordValidate = Validation.isNullOrEmpty(action.Model.Password);
    if (!isUserValidate && !isPasswordValidate) {
        yield put({ type: LOGIN_SUCCESS});
    } else {
        if (isUserValidate) {
            yield put({ type: USERNAME_INVALID });
        }

        if (isPasswordValidate) {
            yield put({ type: PASSWORD_INVALID });
        }
    }
}

function* doUsernameValidate(action: any) {
    if (Validation.isNullOrEmpty(action.Username)) {
        yield put({ type: USERNAME_INVALID });
    } else {
        yield put({ type: USERNAME_VALID });
    }
}

function* doPasswordValidate(action: any) {
    if (Validation.isNullOrEmpty(action.Password)) {
        yield put({ type: PASSWORD_INVALID });
    } else {
        yield put({ type: PASSWORD_VALID });
    }
}

export function* runner() {
    yield takeLatest(LOGIN_ACTION, doLogin);
    yield takeLatest(USERNAME_VALIDATE, doUsernameValidate);
    yield takeLatest(PASSWORD_VALIDATE, doPasswordValidate);
}
