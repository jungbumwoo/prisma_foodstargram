export const isAuthenticated = requset => {
    if (!requset.user) {
        throw Error("You need to log in to perform this action");
    }
    return;
}