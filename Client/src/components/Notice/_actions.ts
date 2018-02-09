export const SHOW_NOTICE_BIG_SUCCESS = "SHOW_NOTICE_BIG_SUCCESS";
export const SHOW_NOTICE_BIG_WARNING = "SHOW_NOTICE_BIG_WARNING";
export const SHOW_NOTICE_BIG_INFORMATION = "SHOW_NOTICE_BIG_INFORMATION";
export const SHOW_NOTICE_SUCCESS = "SHOW_NOTICE_SUCCESS";
export const SHOW_NOTICE_ERROR = "SHOW_NOTICE_ERROR";
export const SHOW_NOTICE_SMALL_SUCCESS = "SHOW_NOTICE_SMALL_SUCCESS";
export const SHOW_NOTICE_SMALL_WARNING = "SHOW_NOTICE_SMALL_WARNING";
export const SHOW_NOTICE_SMALL_INFORMATION = "SHOW_NOTICE_SMALL_INFORMATION";

export const ACTION_SHOWNOTICE_BIG_SUCCESS: (request: any) => any = (request) => {
    return {
        type: SHOW_NOTICE_BIG_SUCCESS,
        Request: request
    };
};

export const ACTION_SHOWNOTICE_BIG_WARNING: (request: any) => any = (request) => {
    return {
        type: SHOW_NOTICE_BIG_WARNING,
        Request: request
    };
};

export const ACTION_SHOWNOTICE_BIG_INFORMATION: (request: any) => any = (request) => {
    return {
        type: SHOW_NOTICE_BIG_INFORMATION,
        Request: request
    };
};

export const ACTION_SHOWNOTICE_SMALL_SUCCESS: (request: any) => any = (request) => {
    return {
        type: ACTION_SHOWNOTICE_SMALL_SUCCESS,
        Request: request
    };
};

export const ACTION_SHOWNOTICE_SMALL_WARNING: (request: any) => any = (request) => {
    return {
        type: SHOW_NOTICE_SMALL_WARNING,
        Request: request
    };
};

export const ACTION_SHOWNOTICE_SMALL_INFORMATION: (request: any) => any = (request) => {
    return {
        type: SHOW_NOTICE_SMALL_INFORMATION,
        Request: request
    };
};

export const ACTION_SHOWNOTICESUCCESS: () => any = () => {
    return {
        type: SHOW_NOTICE_SUCCESS,
    };
};
export const ACTION_SHOWNOTICEERROR: () => any = () => {
    return {
        type: SHOW_NOTICE_ERROR,
    };
};