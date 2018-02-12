import { ServiceBase } from "./ServiceBase";
function default401Callback() {
  window.location.href = "/login"; // AdminRoutePath.Error403Page;
}
export class AdminServiceBase extends ServiceBase {
  protected async executeFetch(url: string, shouldBlockUI: boolean = false, _401Callback?: () => void): Promise<any> {
    try {
      return await super.executeFetch(url, shouldBlockUI);
    } catch (e) {
      if (e === 401) {
        _401Callback = _401Callback || default401Callback;
        _401Callback();
      }
    }
  }

  protected async executeFetchPost(url: string, data: any, shouldBlockUI: boolean = true, _401Callback?: () => void): Promise<any> {
    try {
      return await super.executeFetchPost(url, data, shouldBlockUI);
    } catch (e) {
      if (e === 401) {
        _401Callback = _401Callback || default401Callback;
        _401Callback();
      }
    }
  }
}