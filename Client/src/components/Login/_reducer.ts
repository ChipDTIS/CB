import { LOGIN_ACTION, LOGIN_SUCCESS } from "./_actions";
import __state from "./_models";

// tslint:disable-next-line:no-any
const reducer = (state: __state, action: any) => {
    state = {
        RedirectToAdmin: false
    };
    console.log("reducer0");
    switch (action.type) {
        case LOGIN_ACTION:
            
            console.log("reducer1");
            break;
        case LOGIN_SUCCESS: 
        state.RedirectToAdmin = true;
        console.log("reducer2");
            break;
        default:
            break;
    }
    return state;
};
export default reducer;
