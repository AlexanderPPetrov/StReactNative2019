import { combineReducers } from "redux";
import * as types from "./types";

function movies (state = [], action){
    switch (action.type) {
        case types.MOVIES_FETCHED: {
            return [...action.payload];
        }

        default:
            return state;
    }
}

function selectedRoute (state = "Home", action){
    switch (action.type) {
        case types.SELECTED_ROUTE: {
            return action.payload;
        }

        default:
            return state;
    }
}

export default combineReducers({ movies, selectedRoute });
