import React, {useContext, useEffect} from 'react';
import Context from '../Context/Context';
import Item from './Item';

const Todos = () => {
    const context = useContext(Context);
    const {todos} = context;
    useEffect(() => {
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
