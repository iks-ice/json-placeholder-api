import {
    SET_LOADING,
    SET_SELECTED,
    GET_POSTS,
    GET_COMMENTS,
    GET_LIST,
    GET_ALBUMS,
    GET_TODOS,
    GET_USERS,
    GET_USER
} from '../Types';

export default (state, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case GET_ALBUMS:
            return {
                ...state,
                albums: action.payload,
                loading: false
            }
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
                loading: false
            }
        case GET_LIST:
            return {
                ...state,
                list: action.payload,
                loading: false
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_SELECTED:
            return {
                ...state,
                selected: action.payload
            };
        default:
            return state;
    }
}