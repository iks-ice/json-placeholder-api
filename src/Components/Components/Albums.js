import React, {useContext, useEffect} from 'react';
import {useRouteMatch} from 'react-router-dom';
import Context from '../Context/Context';
import Item from './Item';

const Albums = () => {
    const context = useContext(Context);
    const {list, getList} = context;
    const {path: p, params: {id}} = useRouteMatch();
    useEffect(() => {
        const path = p.slice(p.lastIndexOf('/'));
        getList(path, id);
        // eslint-disable-next-line
    }, [])
    return <ul className='posts'>
        {list.map(album => (
            <Item key={album.id}
                id={album.id}>
                <h3>Title: {album.title}</h3>
            </Item>
        ))}
    </ul>
}

export default Albums;