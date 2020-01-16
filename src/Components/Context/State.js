import React, {useReducer} from 'react';
import axios from 'axios';
import Context from './Context';
import Reducer from './Reducer'
import {SET_SELECTED, SET_LOADING, GET_LIST, GET_USERS} from '../Types';

export const State = props => {
    const initialState = {
        list: [],
        posts: [],
        comments: [],
        albums: [],
        photos: [],
        todos: [],
        users: [],
        selected: undefined,
        loading: false
    }

    const [state, dispatch] = useReducer(Reducer, initialState);

    // Set Loading
    const setLoading = () => dispatch({type: SET_LOADING});

    // Set Selcted
    const setSelected = id => dispatch({
        type: SET_SELECTED,
        payload: id
    });

    //Get data
    const getUsers = async () => {
        setLoading();
        let res = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: GET_USERS,
            payload: res.data
        });
    }
    //Get list 
    const getList = async (path, id) => {
        setLoading();
        let res = await axios.get(`https://jsonplaceholder.typicode.com${path}?userId=${id}`);
        dispatch({
            type: GET_LIST,
            payload: res.data
        });
    }

    return (
        <Context.Provider
            value={{
                list: state.list,
                posts: state.posts,
                comments: state.comments,
                albums: state.albums,
                photos: state.photos,
                todos: state.todos,
                users: state.users,
                selected: state.selected,
                setSelected,
                getUsers,
                getList
            }}>
            {props.children}
        </Context.Provider>
    )
}
export default State;

