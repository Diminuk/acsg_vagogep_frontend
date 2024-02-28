export const UPDATE_FROM_WEBSOCKET = 'UPDATE_FROM_WEBSOCKET'

export const updateStatusFromWebsocket = (data) => ({
    type: UPDATE_FROM_WEBSOCKET,
    payload: data,
});