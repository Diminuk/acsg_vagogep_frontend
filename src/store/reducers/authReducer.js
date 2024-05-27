import { LOGIN_ADMIN, LOGIN_USER, LOGOUT } from "../actions/authActions";

const initialState = {
    isAuthenticated: false,
    isAdmin: false
    // other auth-related state
};

const authReducer = (state = initialState, action) => {
    // reducer logic based on action types
    switch (action.type) {
        case LOGIN_ADMIN:
            return {
                ...state,
                isAuthenticated: true,
                isAdmin: true,
            };
        case LOGIN_USER:
            return {
                ...state,
                isAuthenticated: true,
                isAdmin: false,
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                isAdmin: false,
            };
        default:
            return state;
    }
};

export default authReducer;