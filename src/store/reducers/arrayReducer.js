import { UPDATE_ARRAY } from "../actions/arrayActions";

const initState = {
    id: '',
    name: '',
    elements: []
}

const arrayReducer = (state = initState, action) => {
    switch (action.type) {

        case UPDATE_ARRAY:
            return {
                ...state,
                name: action.data.name,
                elements: action.data.elements
            }
        default:
            return state;
    }
};

export default arrayReducer;