import { UPDATE_FROM_WEBSOCKET } from "../actions/statusLedActions";

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

    },
    processStatus: {
        IsProcessStarted: false,
        AutoJump: false,
        Mode: false,
        CurrentStatus: "init",
        IsProcessPaused: false,
        SingleBatchLimitReached: false,
        ManualJumpTrigger: false,
    },
};

const statusLedReducer = (state = initialState, action) => {
    // reducer logic based on action types
    switch (action.type) {
        case UPDATE_FROM_WEBSOCKET:
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
                singleModeStatus: {
                    Single_Infra_Percentage: action.payload['single_infra_percentage'],
                    Single_Infra_Delay: action.payload['single_infra_delay'],
                    Single_Count: action.payload['single_count'],
                    Single_Batch: action.payload['single_batch'],
                    Single_Batch_Current: action.payload['single_batch_current'],
                    Single_Total_Current: action.payload['single_total_current'],
                    Single_Cut_Length: action.payload['single_cut_length'],
                    Single_Cut_Delay: action.payload['single_cut_delay'],
                    Single_Milling_Placeholder: action.payload['single_milling_placeholder'],
                    Single_Speed: action.payload['single_speed'],
                    Single_Acceleration: action.payload['single_acceleration'],
                    Single_Deceleration: action.payload['single_deceleration'],
                },
                arrayModeStatus: {

                },
                processStatus: {
                    IsProcessStarted: action.payload['process_running'],
                    AutoJump: action.payload['autojump'],
                    Mode: action.payload['mode'],
                    Current_Status: action.payload['process_status'],
                    IsProcessPaused: action.payload['process_paused'],
                    SingleBatchLimitReached: action.payload['batch_limit_reached'],
                    ManualJumpTrigger: action.payload["manual_jump_trigger"],
                },
            }
        default:
            return state;
    }
};

export default statusLedReducer;