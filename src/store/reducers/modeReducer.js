import { TOGGLE_MODE } from '../actions/modeActions'

const initialState = {
    mode: false,
    // other auth-related state
};

const modeReducer = (state = initialState, action) => {
    // reducer logic based on action types
    switch (action.type) {
        case TOGGLE_MODE:
            return {
                ...state,
                mode: !state.mode
            };
        default:
            return state;
    }
};

export default modeReducer;