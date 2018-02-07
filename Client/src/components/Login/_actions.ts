import { UserLoginModel } from "src/models/LoginModel";

export const LOGIN_ACTION = "LOGIN_ACTION";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export function action_Login(model: UserLoginModel) {
    console.log("action");
    return {
        type: LOGIN_ACTION,
        Model: model
    };
}