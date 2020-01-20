import React, {useContext, useEffect} from 'react';
import Context from '../Context/Context';
import Item from './Item';

const Albums = () => {
    const context = useContext(Context);
    const {albums} = context;
    useEffect(() => {
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