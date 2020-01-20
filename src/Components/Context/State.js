import React, {useReducer} from 'react';
import axios from 'axios';
import Context from './Context';
import Reducer from './Reducer'
import {SET_SELECTED, SET_LOADING} from '../Types';

export const State = props => {
    const initialState = {
        list: [],
        posts: [],
        comments: [],
        albums: [],
        photos: [],
        todos: [],
        user: {address: {}, company: {}},
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
    const getResponse = async endPoint =>
        axios.get(`https://jsonplaceholder.typicode.com${endPoint}`);

    const setData = async (endPoint, type) => {
        let res = await getResponse(endPoint);
        dispatch({
            type,
            payload: res.data
        });
    }

    //Get list 
    const getList = async (path, id, type) => {
        setLoading();
        let searchParam;
        if (path === '/posts' || '/albums' || '/todos') {
            searchParam = 'userId';
        }
        if (path === '/comments') {
            searchParam = 'postId';
        }
        let res = await axios.get(`https://jsonplaceholder.typicode.com${path}?${searchParam}=${id}`);
        dispatch({
            type,
            payload: res.data
        });
        return res.data;
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
                user: state.user,
                users: state.users,
                selected: state.selected,
                setSelected,
                getList,
                setData
            }}>
            {props.children}
        </Context.Provider>
    )
}
export default State;

