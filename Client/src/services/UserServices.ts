import { CRUDServiceBase } from "../commons/CRUDServiceBase";
import { LoginViewModel } from "../models/LoginViewModel";
// import { virtualPath } from "../commons/constant";

class UserService extends CRUDServiceBase<LoginViewModel> {
    public get controller(): string {
        return "api";
    }
    public async GetCurrentUser(): Promise<LoginViewModel> {
        let url = "http://localhost:3000/api/test";
        console.log(url);
        let result = await super.executeFetch(url);
        console.log(result);
        return result;
    }
}

const UserServiceInstance = new UserService();
export { UserServiceInstance };