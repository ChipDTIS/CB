import {
    SHOW_NOTICE_ERROR, SHOW_NOTICE_SUCCESS, SHOW_NOTICE_BIG_INFORMATION, SHOW_NOTICE_BIG_WARNING, SHOW_NOTICE_BIG_SUCCESS, SHOW_NOTICE_SMALL_SUCCESS, SHOW_NOTICE_SMALL_WARNING, SHOW_NOTICE_SMALL_INFORMATION
} from "./_actions";
const reducer = (state: any = {}, action: any) => {
    switch (action.type) {
        case SHOW_NOTICE_ERROR:
            window["notice_error"]();
            break;
        case SHOW_NOTICE_SUCCESS:
            window["notice_save_success"]();
            break;
        case SHOW_NOTICE_BIG_SUCCESS:
            {
                let { title, content } = action.Request;
                window["SmartBigMessageBoxSuccess"]({ title, content });
            }
            break;
        case SHOW_NOTICE_BIG_WARNING:
            {
                let { title, content } = action.Request;
                window["SmartBigMessageBoxWarning"]({ title, content });
            }
            break;
        case SHOW_NOTICE_BIG_INFORMATION:
            {
                let { title, content } = action.Request;
                window["SmartBigMessageBoxInformaiton"]({ title, content });
            }
            break;
        case SHOW_NOTICE_SMALL_SUCCESS:
            {
                let { title, content } = action.Request;
                window["SmartSmallMessageBoxSuccess"]({ title, content });
            }
            break;
        case SHOW_NOTICE_SMALL_WARNING:
            {
                let { title, content } = action.Request;
                window["SmartSmallMessageBoxWarning"]({ title, content });
            }
            break;
        case SHOW_NOTICE_SMALL_INFORMATION:
            {
                let { title, content } = action.Request;
                window["SmartSmallMessageBoxInformaiton"]({ title, content });
            }
            break;
        default:
            break;
    }
    return state;
};

export default reducer;