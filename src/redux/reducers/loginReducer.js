import {SIGN_IN} from "../types/loginTypes";

const initialState = {
    isLoading: false
}

export const loginReducer = (state = initialState, action) => {
    if (action.type === SIGN_IN){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}
