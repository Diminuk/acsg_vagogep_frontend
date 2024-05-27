// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import processReducer from './processReducer';
import modeReducer from './modeReducer';
import statusLedReducer from './statusLedReducer';
import parameterReducer from './parameterReducers';
import arrayReducer from './arrayReducer';
import operatorModParamReducer from './operatorModParamReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    process: processReducer,
    mode: modeReducer,
    statusled: statusLedReducer,
    parameter: parameterReducer,
    array: arrayReducer,
    operatorparams: operatorModParamReducer,
    // add other reducers here
});

export default rootReducer;
