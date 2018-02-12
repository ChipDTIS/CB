import { GET_CURRENT_USER, GET_CURRENT_USER_SUCCESS } from "./_actions";
import __state from "./_models";
// import noticeStore from "../Notice/_store";
// import { ACTION_SHOWNOTICE_SMALL_WARNING } from "src/components/Notice/_actions";

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
        case GET_CURRENT_USER:
            // state.Model = action.Model;
            break;
        case GET_CURRENT_USER_SUCCESS: 
            if (action.apitest != null) {
                console.log(action.apitest.firstName);
            }
            break;
        default:
            break;
    }
    return state;
};
export default reducer;
