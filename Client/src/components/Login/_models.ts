 import { UserLoginModel } from "src/models/LoginModel";

// tslint:disable-next-line:class-name
interface __state {
    IsAuth: boolean;
    Model: UserLoginModel;
    Username_Invalid: boolean;
    Password_Invalid: boolean;
    Username_Invalid_MSG: string;
    Password_Invalid_MSG: string;
}
export default __state;