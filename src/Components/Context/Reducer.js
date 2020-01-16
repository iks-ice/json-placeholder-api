import {
    SET_LOADING,
    SET_SELECTED,
    GET_POSTS,
    GET_COMMENTS,
    GET_LIST,
    GET_USERS
} from '../Types';

export default (state, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
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