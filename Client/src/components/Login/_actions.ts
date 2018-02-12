import { LoginViewModel } from "src/models/LoginViewModel";
export const LOGIN_ACTION = "LOGIN_ACTION";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_ACTION = "LOGOUT_ACTION";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";
export const USERNAME_VALIDATE = "USERNAME_VALIDATE";
export const PASSWORD_VALIDATE = "PASSWORD_VALIDATE";
export const USERNAME_INVALID = "USERNAME_INVALID";
export const PASSWORD_INVALID = "PASSWORD_INVALID";
export const USERNAME_VALID = "USERNAME_VALID";
export const PASSWORD_VALID = "PASSWORD_VALID";

export function action_Login(model: LoginViewModel) {
    return {
        type: LOGIN_ACTION,
        Model: model
    };
}

export function action_UsernameValidate(username: string) {
    return {
        type: USERNAME_VALIDATE,
        Username: username
    };
}

export function action_PasswordValidate(password: string) {
    return {
        type: PASSWORD_VALIDATE,
        Password: password
    };
}

export function action_Logout() {
    return {
        type: LOGOUT_ACTION
    };
}