import { CONNECTED } from './constants';


const initialState = {
    connected: false,
};


export const mainReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CONNECTED:
            return {
                ...state,
                connected: action.data
            };
        default:
            return state;
    }
}
