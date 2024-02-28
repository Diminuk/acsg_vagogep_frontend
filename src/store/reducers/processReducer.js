import {
    START_PROCESS_FAILURE, START_PROCESS_SUCCESS,
    CUT_PROCESS_FAILURE, CUT_PROCESS_SUCCESS,
    FEED_PROCESS_FAILURE, FEED_PROCESS_SUCCESS,
    STOP_PROCESS_FAILURE, STOP_PROCESS_SUCCESS
} from "../actions/processActions";


const initialState = {
    isProcessStarted: false,
    nullCut: false,
    error: null,
};

const processReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case START_PROCESS_SUCCESS:
            console.log(state);
            return {
                ...state,
                isProcessStarted: true,
                error: null, // Clear any previous errors
            };
        case START_PROCESS_FAILURE:
            return {
                ...state,
                error: action.payload, // Store the error message
            };
        case STOP_PROCESS_SUCCESS:
            return {
                ...state,
                isProcessStarted: false,
                error: null, // Clear any previous errors
            };
        case STOP_PROCESS_FAILURE:
            return {
                ...state,
                error: action.payload, // Clear any previous errors
            };
        default:
            return state;
    }
};

export default processReducer;

