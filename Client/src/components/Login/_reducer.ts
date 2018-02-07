import { LOGIN_ACTION, LOGIN_SUCCESS } from "./_actions";
import __state from "./_models";

// tslint:disable-next-line:no-any
const reducer = (state: __state, action: any) => {
    switch (action.type) {
        case LOGIN_ACTION:
            // state.Model = action.SModel;
            break;
        case LOGIN_SUCCESS:
            break;
        default:
            break;
    }
    return state;
};
export default reducer;
