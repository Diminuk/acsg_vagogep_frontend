export const LOGIN_ADMIN = 'LOGIN_ADMIN';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT = 'LOGOUT';


export const login_admin = () => ({
    type: LOGIN_ADMIN,
});

export const login_user = () => ({
    type: LOGIN_USER,
});

export const logout = () => ({
    type: LOGOUT,
});