import { UPDATE_SPEED, UPDATE_ACCELERATION, UPDATE_DECELERATION } from "../actions/parameterActions";

const initialState = {
    Speed: {
        1: 100,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 600,
        7: 700,
        8: 800,
        9: 900,
        10: 1000,
        11: 1100,
        12: 1200,
        13: 1300,
        14: 1400,
        15: 1500,
        16: 1600
    },
    Acceleration: {
        1: 100,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 600,
        7: 700,
        8: 800,
        9: 900,
        10: 1000,
        11: 1100,
        12: 1200,
        13: 1300,
        14: 1400,
        15: 1500,
        16: 1600

    },
    Deceleration: {
        1: 100,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 600,
        7: 700,
        8: 800,
        9: 900,
        10: 1000,
        11: 1100,
        12: 1200,
        13: 1300,
        14: 1400,
        15: 1500,
        16: 1600

    },
};

const parameterReducer = (state = initialState, action) => {
    console.log(action.type);
    const { number, value } = action;
    switch (action.type) {
        case UPDATE_SPEED:
            return {
                ...state,
                Speed: {
                    ...state.Speed,
                    [number]: value
                }
            };
        case UPDATE_ACCELERATION:
            return {
                ...state,
                Acceleration: {
                    ...state.Acceleration,
                    [number]: value
                }
            };
        default:
            return state;
    }
};

export default parameterReducer;

