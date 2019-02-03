import * as types from "./types";


export function setMovies (movies) {
    return {type: types.MOVIES_FETCHED, payload: movies}
}


export function setSeletedRoute (route) {
    return {type: types.SELECTED_ROUTE, payload: route}
}