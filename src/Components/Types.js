export const SET_LOADING = 'SET_LOADING';
export const SET_SELECTED = 'SET_SELECTED';
export const GET_POSTS = 'GET_POSTS';
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_ALBUMS = 'GET_ALBUMS';
export const GET_LIST = 'GET_LIST';
export const GET_PHOTOS = 'GET_PHOTOS';
export const GET_TODOS = 'GET_TODOS';
export const GET_USERS = 'GET_USERS';

export const getType = path => {
    switch (path) {
        case '/users':
            return GET_USERS;
        case '/posts':
            return GET_POSTS;
        case '/albums':
            return GET_ALBUMS;
        case '/todos':
            return GET_TODOS;
        default:
            return '';
    }
}