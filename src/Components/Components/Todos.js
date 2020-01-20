import React, {useContext, useEffect} from 'react';
import {useRouteMatch} from 'react-router-dom';
import Context from '../Context/Context';
import Item from './Item';

const Todos = () => {
    const context = useContext(Context);
    const {todos, getList} = context;
    const {path: p, params: {id}} = useRouteMatch();
    useEffect(() => {
        const path = p.slice(p.lastIndexOf('/'));
        getList(path, id, 'GET_TODOS');
        // eslint-disable-next-line
    }, [])
    return <ul className='list'>
        {todos.map(todo => (
            <Item key={todo.id}
                id={todo.id}>
                <h3>{todo.title}</h3>
            </Item>
        ))}
    </ul>
}
export default Todos;
