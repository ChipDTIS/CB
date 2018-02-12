export interface LoginViewModel {
    IsError?: boolean;
    ErrorMessage?: string;
    UserName: string;
    Password: string;
    IsRememberMe?: boolean;
}