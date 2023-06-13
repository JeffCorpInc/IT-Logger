// Actions or Functions Here

import { GET_LOGS, ADD_LOG, SET_LOADING, LOGS_ERROR, DELETE_LOG, UPDATE_LOG, SET_CURRENT, CLEAR_CURRENT, SEARCH_LOGS } from "./type";

// action to get log
export const getLogs = () => async dispatch => {
    try {

        // set loading
        setLoading();
        
        // fetcing data from server
        const res = await fetch("/logs");
        const data = await res.json();

        // dispatching data to reducer
        dispatch({
            type: GET_LOGS,
            payload: data
        });

    } catch(err) {

        // dispatching error to reducer
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
}

// action to Add log
export const addLog = (log) => async dispatch => {
    try {

        // set loading
        setLoading();
        
        // fetcing data from server
        const res = await fetch("/logs", {

            method: "POST",
            // JSON.stringify converts javascript value into string
            body: JSON.stringify(log),
            headers:{
                
                'Content-Type':'application/json'
            }
        });
        const data = await res.json();

        // dispatching data to reducer
        dispatch({
            type: ADD_LOG,
            payload: data
        });

    } catch(err) {

        // dispatching error to reducer
        dispatch({
            type: LOGS_ERROR,
            // payload: err.response.data
        });
    }
}

// action to Delete log
export const deleteLog = (id) => async dispatch => {
    try {

        // set loading
        setLoading();
        
        // fetcing data from server
        // eslint-disable-next-line no-unused-vars
        const res = await fetch(`/logs/${id}` , {

            method: "DELETE"
        });

        // dispatching data to reducer
        dispatch({
            type: DELETE_LOG,
            payload: id
        });

    } catch(err) {

        // dispatching error to reducer
        dispatch({
            type: LOGS_ERROR,
            // payload: err.response.data
        });
    }
}

// Action to Set the Current Log
export const setCurrent = (log) => {

    return{
        type: SET_CURRENT,
        payload: log
    }
}

// Action to Clear the Current Log
export const cleartCurrent = (log) => {

    return{
        type: CLEAR_CURRENT,
    }
}

// action to update log
export const updateLog = (log) => async dispatch => {
    try {

        // set loading
        setLoading();
        
        // fetcing data from server
        const res = await fetch(`/logs/${log.id}`, {

            method: "PUT",
            // JSON.stringify converts javascript value into string
            body: JSON.stringify(log),
            headers:{
                
                'Content-Type':'application/json'
            }
        });
        const data = await res.json();

        // dispatching data to reducer
        dispatch({
            type: UPDATE_LOG,
            payload: data
        });

    } catch(err) {

        // dispatching error to reducer
        dispatch({
            type: LOGS_ERROR,
            // payload: err.response.data
        });
    }
}

// action to Search Logs
export const searchLog = (text) => async dispatch => {
    try {

        // set loading
        setLoading();
        
        // fetcing data from server
        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();

        // dispatching data to reducer
        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });

    } catch(err) {

        // dispatching error to reducer
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
}

// set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}