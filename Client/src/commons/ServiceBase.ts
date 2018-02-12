import { UIBlocker } from "./ui-blocker";
export class ServiceBase {
    protected async executeFetch(url: string, shouldBlockUI: boolean = false): Promise<any> {
        try {
            if (!UIBlocker || !UIBlocker.instance) {
                shouldBlockUI = false;
            }
            if (shouldBlockUI) {
                UIBlocker.instance.block();
            }
            let result = await fetch(url, {
                headers: {
                    "auth": localStorage.getItem("user_token") + ""
                },
                method: "GET",
                /**
                 * make a fetch request with credentials such as cookies
                 */
                credentials: "include"
            });
            if (shouldBlockUI) {
                UIBlocker.instance.unblock();
            }
            if (result.ok) {
                return await result.json();
            }
            if (result.status === 401) {
                throw 401;
            }
            return null;
        } catch (e) {
            if (e === 401) {
                throw e;
            }
        }
    }

    protected async executeFetchPost(url: string, data: any, shouldBlockUI: boolean = true): Promise<any> {
        try {
            if (!UIBlocker || !UIBlocker.instance) {
                shouldBlockUI = false;
            }
            if (shouldBlockUI) {
                UIBlocker.instance.block();
            }
            let result = await fetch(url,
                {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "auth": localStorage.getItem("user_token") + ""
                    },
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify(data)
                });

            if (shouldBlockUI) {
                UIBlocker.instance.unblock();
            }
            if (result.ok) {
                return await result.json();
            }
            if (result.status === 401) {
                throw 401;
            }
            return null;
        } catch (e) {
            if (e === 401) {
                throw e;
            }
        }
    }
}