interface SmartAlertRequest {
    title: string;
    content: string;
    type?: SmartAlertTypeEnums;
    closeConfirm?: boolean;
}

export enum SmartAlertResultEnums {
    Confirm = 1,
    Cancel = 2
}

export enum SmartAlertTypeEnums {
    Success = 1,
    Warning = 2,
    Error = 3
}

export class SmartAlerts {
    static show(request: SmartAlertRequest): Promise<SmartAlertResultEnums> {
        return new Promise((action: (r: SmartAlertResultEnums) => void) => {
            // tslint:disable-next-line:no-string-literal
            window["SmartMessageBox"]({
                title: request.title,
                content: request.content,
                buttons: request.closeConfirm ? "[Đóng]" : "[Hủy][Đồng ý]"
            },
                (isConfirm: String) => {
                    action(isConfirm === "Đồng ý" ? SmartAlertResultEnums.Confirm : SmartAlertResultEnums.Cancel);
                }
            );
        });
    }
}