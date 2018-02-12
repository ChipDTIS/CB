import { LOGIN_ACTION, LOGIN_SUCCESS, LOGIN_FAILED, USERNAME_VALIDATE, PASSWORD_VALIDATE, USERNAME_INVALID, PASSWORD_INVALID, USERNAME_VALID, PASSWORD_VALID } from "./_actions";
import __state from "./_models";
import noticeStore from "../Notice/_store";
import { ACTION_SHOWNOTICE_SMALL_WARNING } from "src/components/Notice/_actions";

const INITIAL_STATE: __state = {
    IsAuth: false,
    Model: {
        UserName: "",
        Password: "",
        IsRememberMe: false
    },
    Password_Invalid: false,
    Username_Invalid: false,
    Username_Invalid_MSG: "Vui lòng nhập tài khoản",
    Password_Invalid_MSG: "Vui lòng nhập mật khẩu"
}; 
const reducer = (state: __state = INITIAL_STATE , action: any) => {
    state.IsAuth = false;
    switch (action.type) {
        case LOGIN_ACTION:
            state.Model = action.Model;
            break;
        case LOGIN_SUCCESS: 
            state.IsAuth = true;
            break;
        case LOGIN_FAILED:
            state.IsAuth = false;
            noticeStore.dispatch(ACTION_SHOWNOTICE_SMALL_WARNING({title: "Đăng nhập", content: action.content}));
            break;
        case LOGIN_FAILED:
            break;
        case USERNAME_VALIDATE:
            state.Model.UserName = action.Username;
            break;
        case PASSWORD_VALIDATE:
            state.Model.Password = action.Password;
            break;
        case USERNAME_INVALID:
            state.Username_Invalid = true;
            // state.Username_Invalid_MSG = "Vui lòng nhập tài khoản";
            break;
        case PASSWORD_INVALID:
            state.Password_Invalid = true;
            // state.Password_Invalid_MSG = "Vui lòng nhập mật khẩu";
            break;
        case USERNAME_VALID:
            state.Username_Invalid = false;
            // state.Username_Invalid_MSG = "";
            break;
        case PASSWORD_VALID:
            state.Password_Invalid = false;
            // state.Password_Invalid_MSG = "";
            break;
        default:
            break;
    }
    return state;
};
export default reducer;
