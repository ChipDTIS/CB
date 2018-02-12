 import { LoginViewModel } from "src/models/LoginViewModel";

// tslint:disable-next-line:class-name
interface __state {
    IsAuth: boolean;
    Model: LoginViewModel;
    Username_Invalid: boolean;
    Password_Invalid: boolean;
    Username_Invalid_MSG: string;
    Password_Invalid_MSG: string;
}
export default __state;