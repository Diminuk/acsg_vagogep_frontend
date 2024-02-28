// Action types
export const UPDATE_SPEED = 'UPDATE_SPEED';
export const UPDATE_ACCELERATION = 'UPDATE_ACCELERATION';
export const UPDATE_DECELERATION = 'UPDATE_DECELERATION';

// Action creators
export const updateSpeed = (number, value) => ({
    type: UPDATE_SPEED,
    number: number,
    value: value
});
export const updateAcceleration = (number, value) => ({
    type: UPDATE_ACCELERATION,
    number: number,
    value: value
});
export const updateDeceleration = (number, value) => ({
    type: UPDATE_DECELERATION,
    number: number,
    value: value
});