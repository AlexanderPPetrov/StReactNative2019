import * as types from "./types";
import NetworkClient from "../api/NetworkClient";

export function setMovies (movies) {
    return {type: types.MOVIES_FETCHED, payload: movies}
}


export function setSeletedRoute (route) {
    return { type: types.SELECTED_ROUTE, payload: route}
}

//export const setError = ex => ({ type: types.SET_ERROR, payload: ex})

export function setError (ex) {
    return { type: types.SET_ERROR, payload: ex };
}

export const getMovies = () => async dispatch => {
    //TODO dispatch(startLoading)

    try {
        const res = await NetworkClient.get(
        "https://facebook.github.io/react-native/movies.json2");
        dispatch(setMovies(res.movies));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }


};