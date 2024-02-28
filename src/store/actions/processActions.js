// Action types
export const START_PROCESS_SUCCESS = 'START_PROCESS_SUCCESS';
export const START_PROCESS_FAILURE = 'START_PROCESS_FAILURE';
export const STOP_PROCESS_SUCCESS = 'STOP_PROCESS_SUCCESS';
export const STOP_PROCESS_FAILURE = 'STOP_PROCESS_FAILURE';
export const STOP1_PROCESS_SUCCESS = 'STOP1_PROCESS_SUCCESS';
export const STOP1_PROCESS_FAILURE = 'STOP1_PROCESS_FAILURE';
export const FEED_PROCESS_SUCCESS = 'FEED_PROCESS_SUCCESS';
export const FEED_PROCESS_FAILURE = 'FEED_PROCESS_FAILURE';
export const PAUSE_PROCESS_SUCCESS = 'PAUSE_PROCESS_SUCCESS';
export const PAUSE_PROCESS_FAILURE = 'PAUSE_PROCESS_FAILURE';
export const CUT_PROCESS_SUCCESS = 'CUT_PROCESS_SUCCESS';
export const CUT_PROCESS_FAILURE = 'CUT_PROCESS_FAILURE';
export const UNLOAD_PROCESS_SUCCESS = 'UNLOAD_PROCESS_SUCCESS';
export const UNLOAD_PROCESS_FAILURE = 'UNLOAD_PROCESS_FAILURE';

export const startProcessSuccess = () => ({
    type: START_PROCESS_SUCCESS,
});

export const startProcessFailure = (error) => ({
    type: START_PROCESS_FAILURE,
    payload: error,
});


export const stopProcessSuccess = () => ({
    type: STOP_PROCESS_SUCCESS,
});

export const stopProcessFailure = (error) => ({
    type: STOP_PROCESS_FAILURE,
    payload: error,
});


export const stop1ProcessSuccess = () => ({
    type: STOP1_PROCESS_SUCCESS,
});

export const stop1ProcessFailure = (error) => ({
    type: STOP1_PROCESS_FAILURE,
    payload: error,
});


export const feedProcessSuccess = () => ({
    type: FEED_PROCESS_SUCCESS,
});

export const feedProcessFailure = (error) => ({
    type: FEED_PROCESS_FAILURE,
    payload: error,
});


export const pauseProcessSuccess = () => ({
    type: PAUSE_PROCESS_SUCCESS,
});

export const pauseProcessFailure = (error) => ({
    type: PAUSE_PROCESS_FAILURE,
    payload: error,
});


export const cutProcessSuccess = () => ({
    type: CUT_PROCESS_SUCCESS,
});

export const cutProcessFailure = (error) => ({
    type: CUT_PROCESS_FAILURE,
    payload: error,
});


export const unloadProcessSuccess = () => ({
    type: UNLOAD_PROCESS_SUCCESS,
});

export const unloadProcessFailure = (error) => ({
    type: UNLOAD_PROCESS_FAILURE,
    payload: error,
});
