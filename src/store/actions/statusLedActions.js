export const UPDATE_FROM_WEBSOCKET = 'UPDATE_FROM_WEBSOCKET'
export const UPDATE_ARRAY_MODE = "UPDATE_ARRAY_MODE"

export const UPDATE_SINGLE_MODE_INFP = "UPDATE_SINGLE_MODE_INFP"
export const UPDATE_SINGLE_MODE_INFDLY = "UPDATE_SINGLE_MODE_INFDLY"
export const UPDATE_SINGLE_MODE_COUNT = "UPDATE_SINGLE_MODE_COUNT"
export const UPDATE_SINGLE_MODE_BATCH = "UPDATE_SINGLE_MODE_BATCH"
export const UPDATE_SINGLE_MODE_BATCH_CURRENT = "UPDATE_SINGLE_MODE_BATCH_CURRENT"
export const UPDATE_SINGLE_MODE_TOTAL_CURRENT = "UPDATE_SINGLE_MODE_TOTAL_CURRENT"
export const UPDATE_SINGLE_MODE_LENGTH = "UPDATE_SINGLE_MODE_LENGTH"
export const UPDATE_SINGLE_MODE_CUTDLY = "UPDATE_SINGLE_MODE_CUTDLY"
export const UPDATE_SINGLE_MODE_MILL = "UPDATE_SINGLE_MODE_MILL"
export const UPDATE_SINGLE_MODE_SPD = "UPDATE_SINGLE_MODE_SPD"
export const UPDATE_SINGLE_MODE_ACC = "UPDATE_SINGLE_MODE_ACC"
export const UPDATE_SINGLE_MODE_DEC = "UPDATE_SINGLE_MODE_DEC"

export const UPDATE_PROCESS_AUTOJUMP = "UPDATE_PROCESS_AUTOJUMP"
export const UPDATE_PROCESS_MODE = "UPDATE_PROCESS_MODE"
export const UPDATE_PROCESS_STATUS = "UPDATE_PROCESS_STATUS"
export const UPDATE_PROCESS_PAUSED = "UPDATE_PROCESS_PAUSED"
export const UPDATE_PROCESS_BATCHLIMIT = "UPDATE_PROCESS_BATCHLIMIT"
export const UPDATE_PROCESS_MANUALJUMP_TRIGGER = "UPDATE_PROCESS_MANUALJUMP_TRIGGER"

export const updateStatusFromWebsocket = (data) => ({
    type: UPDATE_FROM_WEBSOCKET,
    payload: data,
});
export const updateArrayModeStatus = (data) => ({
    type: UPDATE_ARRAY_MODE,
    payload: data,
});

export const updateSingleModeInfp = (data) => ({
    type: UPDATE_SINGLE_MODE_INFP,
    payload: data,
});

export const updateSingleModeInfdly = (data) => ({
    type: UPDATE_SINGLE_MODE_INFDLY,
    payload: data,
});

export const updateSIngleModeCount = (data) => ({
    type: UPDATE_SINGLE_MODE_COUNT,
    payload: data,
});

export const updateSingleModeBatch = (data) => ({
    type: UPDATE_SINGLE_MODE_BATCH,
    payload: data,
});

export const updateSingleModeBatchCurrent = (data) => ({
    type: UPDATE_SINGLE_MODE_BATCH_CURRENT,
    payload: data,
});

export const updateSingleModeTotalCurrent = (data) => ({
    type: UPDATE_SINGLE_MODE_TOTAL_CURRENT,
    payload: data,
});

export const updateSingleModeLength = (data) => ({
    type: UPDATE_SINGLE_MODE_LENGTH,
    payload: data,
});

export const updateSingleModeCutdly = (data) => ({
    type: UPDATE_SINGLE_MODE_CUTDLY,
    payload: data,
});

export const updateSingleModeMill = (data) => ({
    type: UPDATE_SINGLE_MODE_MILL,
    payload: data,
});

export const updateSingleModeSpd = (data) => ({
    type: UPDATE_SINGLE_MODE_SPD,
    payload: data,
});

export const updateSingleModeAcc = (data) => ({
    type: UPDATE_SINGLE_MODE_ACC,
    payload: data,
});

export const updateSingleModeDec = (data) => ({
    type: UPDATE_SINGLE_MODE_DEC,
    payload: data,
});

export const updateProcessAutojump = (data) => ({
    type: UPDATE_PROCESS_AUTOJUMP,
    payload: data,
});

export const updateProcessMode = (data) => ({
    type: UPDATE_PROCESS_MODE,
    payload: data,
});

export const updateProcessStatus = (data) => ({
    type: UPDATE_PROCESS_STATUS,
    payload: data,
});

export const updateProcessPaused = (data) => ({
    type: UPDATE_PROCESS_PAUSED,
    payload: data,
});

export const updateProcessBatchlimit = (data) => ({
    type: UPDATE_PROCESS_BATCHLIMIT,
    payload: data,
});

export const updateProcessManualjumpTrigger = (data) => ({
    type: UPDATE_PROCESS_MANUALJUMP_TRIGGER,
    payload: data,
});
