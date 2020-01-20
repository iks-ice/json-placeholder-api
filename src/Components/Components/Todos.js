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
                <section className={todo.completed ? 'bg-success' : 'bg-danger'}>
                    <h3>{todo.title}</h3>
                </section>
            </Item>
        ))}
    </ul>
}
export default Todos;
