import axios from 'axios';
import  * as types from './types';
import history from '../../history';

export const signIn = (userId) => {
    return {
        type: types.SIGNED_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: types.SIGNED_OUT,
    }
};

export const fetchStreams = () => dispatch => {
    axios.get('http://localhost:3001/streams')
        .then( res => {
            dispatch({
                type: types.FETCH_STREAMS,
                payload: res.data
            });
        }); 
};

export const createStream = formValues => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    axios.post ('http://localhost:3001/streams', {...formValues, userId})
    .then(res => {
        dispatch({
            type: types.CREATE_STREAM,
            payload: res.data
        });
        history.push('/');
    });
};

export const fetchStream = id => dispatch => {
    axios.get(`http://localhost:3001/streams/${id}`)
        .then( res => {
            dispatch({
                type: types.FETCH_STREAM,
                payload: res.data
            });
        });
};

export const updateStream = (id, formValues) => dispatch => {
    axios.put(`http://localhost:3001/streams/${id}`, formValues)
        .then( res => {
            dispatch({
                type: types.UPDATE_STREAM,
                payload: res.data
            });
            history.push('/')
        });
};

export const deleteStream = id => dispatch => {
    axios.delete(`http://localhost:3001/streams/${id}`)
        .then( res => {
            dispatch({
                type: types.DELETE_STREAM,
                payload : id
            });
            history.push('/')
        });
};

