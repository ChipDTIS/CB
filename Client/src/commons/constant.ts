
export const virtualPath = "";

export const RouterPath = {
    Index: `${virtualPath}`
};

export const fakeAuth = {
    isAuthenticated: false,
    authenticate() {
        this.isAuthenticated = true;
        // setTimeout(cb, 100);
    },
    signout() {
        this.isAuthenticated = false;
        // setTimeout(cb, 100);
    }
};