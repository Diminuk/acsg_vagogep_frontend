import {
    UPDATE_FROM_WEBSOCKET, UPDATE_ARRAY_MODE, UPDATE_SINGLE_MODE_INFP,
    UPDATE_SINGLE_MODE_INFDLY, UPDATE_SINGLE_MODE_COUNT, UPDATE_SINGLE_MODE_BATCH,
    UPDATE_SINGLE_MODE_BATCH_CURRENT, UPDATE_SINGLE_MODE_TOTAL_CURRENT, UPDATE_SINGLE_MODE_LENGTH,
    UPDATE_SINGLE_MODE_CUTDLY, UPDATE_SINGLE_MODE_MILL,
    UPDATE_SINGLE_MODE_SPD, UPDATE_SINGLE_MODE_ACC, UPDATE_SINGLE_MODE_DEC,
    UPDATE_PROCESS_AUTOJUMP, UPDATE_PROCESS_MODE, UPDATE_PROCESS_STATUS, UPDATE_PROCESS_PAUSED,
    UPDATE_PROCESS_BATCHLIMIT, UPDATE_PROCESS_MANUALJUMP_TRIGGER
} from "../actions/statusLedActions";

const initialState = {
    sensorStatus: {
        Material_Begin: false,
        Milling: false,
        Infra: false,
        Material_End: false,
        Door: false,
        Knife_Down: false,
        Knife_Up: true,
        Null_Cut: false,
    },
    singleModeStatus: {
        Single_Infra_Percentage: 50,
        Single_Infra_Delay: 100,
        Single_Count: 50,
        Single_Batch: 50,
        Single_Batch_Current: 1,
        Single_Total_Current: 1,
        Single_Cut_Length: 100,
        Single_Cut_Delay: 100,
        Single_Milling_Placeholder: 0,
        Single_Speed: 1,
        Single_Acceleration: 1,
        Single_Deceleration: 1,
    },
    arrayModeStatus: {
        ArrayCurrentNumber: 1,
        ArrayCurrentCount: 1,
    },
    processStatus: {
        IsProcessStarted: false,
        AutoJump: false,
        Mode: false,
        CurrentStatus: "init",
        IsProcessPaused: false,
        SingleBatchLimitReached: false,
        ManualJumpTrigger: false,
        ProcessStatus: "IDLE"
    },
    singleStatus: {
        singleCurrentCount: 1,
        singleCurrentBatch: 1,
        singleTotalLength: 0,
        singleRemainingLength: 0,
        singleProcessGood: 0,
        singleProcessBad: 0,
        singleTotalRemainingTime: 0,
        singleBatchRemainingTime: 0,
        singleTotalGood: 0,
        singleTotalBad: 0,
        singleUptime: 0,
        singleBatchRemainingLength: 0,
        singleUsedLengthGood: 0,
        singleUsedLengthBad: 0,
    },
    arrayStatus: {
        arrayCurrentNumber: 1,
        arrayCurrentCount: 1,
        arrayProcessRemainingLength: 0,
        arrayStackRemainingLength: 0,
        arrayProcessGood: 0,
        arrayProcessBad: 0,
        arrayTotalGood: 0,
        arrayTotalBad: 0,
        arrayUptime: 0,
        arrayProcessRemainingTime: 0,
        arrayStackRemainingTime: 0,
        arrayUsedLengthGood: 0,
        arrayUsedLengthBad: 0,
    },
};

const statusLedReducer = (state = initialState, action) => {
    // reducer logic based on action types
    switch (action.type) {
        case UPDATE_FROM_WEBSOCKET:
            console.log(action.payload)
            return {
                ...state,
                sensorStatus: {
                    Material_Begin: action.payload['mat_begin'],
                    Milling: action.payload['mill'],
                    Infra: action.payload['infra'],
                    Material_End: action.payload['mat_end'],
                    Door: action.payload['door'],
                    Knife_Down: action.payload['cut_down'],
                    Knife_Up: action.payload['cut_up'],
                    Null_Cut: action.payload['null_cut'],
                },
                processStatus: {
                    IsProcessStarted: action.payload['process_running'],
                    ManualJumpTrigger: action.payload["manual_jump_trigger"],
                    ProcessStatus: action.payload["process_status"],
                    Mode: action.payload["mode"],
                    AutoJump: action.payload['autojump'],
                    isProcessPaused: action.payload['process_paused'],
                    SingleBatchLimitReached: action.payload["batch_limit_reached"],
                },
                singleStatus: {
                    singleCurrentCount: action.payload["single_current_count"],
                    singleCurrentBatch: action.payload["single_current_batch"],
                    singleTotalLength: action.payload["single_total_length"],
                    singleRemainingLength: action.payload["single_remaining_length"],
                    singleProcessGood: action.payload["single_process_good"],
                    singleProcessBad: action.payload["single_process_bad"],
                    singleTotalRemainingTime: action.payload["single_total_remaining_time"],
                    singleBatchRemainingTime: action.payload["single_batch_remaining_time"],
                    singleTotalGood: action.payload["single_total_good"],
                    singleTotalBad: action.payload["single_total_bad"],
                    singleUptime: action.payload["single_uptime"],
                    singleBatchRemainingLength: action.payload["single_batch_remaining_length"],
                    singleUsedLengthGood: action.payload["single_used_length_good"],
                    singleUsedLengthBad: action.payload["single_used_length_bad"],
                },
                arrayStatus: {
                    arrayCurrentNumber: action.payload["array_current_number"],
                    arrayCurrentCount: action.payload["array_current_count"],
                    arrayProcessRemainingLength: action.payload["array_process_remaining_length"],
                    arrayStackRemainingLength: action.payload["array_stack_remaining_length"],
                    arrayProcessGood: action.payload["array_process_good"],
                    arrayProcessBad: action.payload["array_porcess_bad"],
                    arrayTotalGood: action.payload["array_total_good"],
                    arrayTotalBad: action.payload["array_total_bad"],
                    arrayUptime: action.payload["array_uptime"],
                    arrayProcessRemainingTime: action.payload["array_process_remaining_time"],
                    arrayStackRemainingTime: action.payload["array_stack_remaining_time"],
                    arrayUsedLengthGood: action.payload["array_used_length_good"],
                    arrayUsedLengthBad: action.payload["array_used_length_bad"],
                },
            }
        // single
        case UPDATE_SINGLE_MODE_INFP:
            return {
                ...state,
                singleModeStatus: {
                    ...state.singleModeStatus,
                    Single_Infra_Percentage: action.payload['single_infra_percentage'],
                },
            }
        case UPDATE_SINGLE_MODE_INFDLY:
            return {
                ...state,
                singleModeStatus: {
                    ...state.singleModeStatus,
                    Single_Infra_Delay: action.payload['single_infra_delay'],
                },
            }
        case UPDATE_SINGLE_MODE_COUNT:
            return {
                ...state,
                singleModeStatus: {
                    ...state.singleModeStatus,
                    Single_Count: action.payload['single_count'],
                },
            }
        case UPDATE_SINGLE_MODE_BATCH:
            return {
                ...state,
                singleModeStatus: {
                    ...state.singleModeStatus,
                    Single_Batch: action.payload['single_batch'],
                },
            }
        case UPDATE_SINGLE_MODE_BATCH_CURRENT:
            return {
                ...state,
                singleModeStatus: {
                    ...state.singleModeStatus,
                    Single_Batch_Current: action.payload['single_batch_current'],
                },
            }
        case UPDATE_SINGLE_MODE_TOTAL_CURRENT:
            return {
                ...state,
                singleModeStatus: {
                    ...state.singleModeStatus,
                    Single_Total_Current: action.payload['single_total_current'],
                },
            }
        case UPDATE_SINGLE_MODE_LENGTH:
            return {
                ...state,
                singleModeStatus: {
                    ...state.singleModeStatus,
                    Single_Cut_Length: action.payload['single_cut_length'],
                },
            }
        case UPDATE_SINGLE_MODE_CUTDLY:
            return {
                ...state,
                singleModeStatus: {
                    ...state.singleModeStatus,
                    Single_Cut_Delay: action.payload['single_cut_delay'],
                },
            }
        case UPDATE_SINGLE_MODE_MILL:
            return {
                ...state,
                singleModeStatus: {
                    ...state.singleModeStatus,
                    Single_Milling_Placeholder: action.payload['single_milling_placeholder'],
                },
            }
        case UPDATE_SINGLE_MODE_SPD:
            return {
                ...state,
                singleModeStatus: {
                    ...state.singleModeStatus,
                    Single_Speed: action.payload['single_speed'],
                },
            }
        case UPDATE_SINGLE_MODE_ACC:
            return {
                ...state,
                singleModeStatus: {
                    ...state.singleModeStatus,
                    Single_Acceleration: action.payload['single_acceleration'],
                },
            }
        case UPDATE_SINGLE_MODE_DEC:
            return {
                ...state,
                singleModeStatus: {
                    ...state.singleModeStatus,
                    Single_Deceleration: action.payload['single_deceleration'],
                },
            }

        // array
        case UPDATE_ARRAY_MODE:
            return {
                ...state,
                arrayModeStatus: {
                    ArrayCurrentNumber: action.payload['array_current_number'],
                    ArrayCurrentCount: action.payload['array_current_count'],
                }
            }

        // process
        case UPDATE_PROCESS_AUTOJUMP:
            return {
                ...state,
                processStatus: {
                    ...state.processStatus,
                    AutoJump: action.payload['autojump'],
                },
            }
        case UPDATE_PROCESS_MODE:
            return {
                ...state,
                processStatus: {
                    ...state.processStatus,
                    Mode: action.payload['mode'],
                },
            }
        case UPDATE_PROCESS_STATUS:
            return {
                ...state,
                processStatus: {
                    ...state.processStatus,
                    Current_Status: action.payload['process_status'],
                },
            }
        case UPDATE_PROCESS_PAUSED:
            return {
                ...state,
                processStatus: {
                    ...state.processStatus,
                    IsProcessPaused: action.payload['process_paused'],
                },
            }
        case UPDATE_PROCESS_BATCHLIMIT:
            return {
                ...state,
                processStatus: {
                    ...state.processStatus,
                    SingleBatchLimitReached: action.payload['batch_limit_reached'],
                },
            }
        case UPDATE_PROCESS_MANUALJUMP_TRIGGER:
            return {
                ...state,
                processStatus: {
                    ...state.processStatus,
                    ManualJumpTrigger: action.payload["manual_jump_trigger"],
                },
            }

        default:
            return state;
    }
};

export default statusLedReducer;