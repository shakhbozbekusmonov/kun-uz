import {UPDATE_STATE} from "../types/newsTypes";


export function updateState(data){
    return {
        type: UPDATE_STATE,
        payload: data
    }
}
