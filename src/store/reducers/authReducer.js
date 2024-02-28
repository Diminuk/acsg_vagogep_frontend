const initialState = {
    isAuthenticated: true,
    isAdmin: true
    // other auth-related state
};

const authReducer = (state = initialState, action) => {
    // reducer logic based on action types
    switch (action.type) {
        case 'LOGIN_OK_ADMIN':
            return {
                ...state,
                isAuthenticated: true,
                isAdmin: true,
            };
        default:
            return state;
    }
};

export default authReducer;