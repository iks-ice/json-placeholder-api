import React, {useContext, useEffect} from 'react';
import {useRouteMatch} from 'react-router-dom';
import Context from '../Context/Context';
import Item from './Item';

const Albums = () => {
    const context = useContext(Context);
    const {albums, getList} = context;
    const {path: p, params: {id}} = useRouteMatch();
    useEffect(() => {
        const path = p.slice(p.lastIndexOf('/'));
        getList(path, id, 'GET_ALBUMS');
        // eslint-disable-next-line
    }, [])
    return <ul className='list'>
        {albums.map(album => (
            <Item key={album.id}
                id={album.id}>
                <h3>{album.title}</h3>
            </Item>
        ))}
    </ul>
}

export default Albums;