import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {menusReducer} from "./menusReducer";
import {newsReducer} from "./newsReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    menus: menusReducer,
    news: newsReducer
})
