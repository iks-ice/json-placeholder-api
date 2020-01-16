import React, {useContext, useEffect} from 'react';
import {useRouteMatch} from 'react-router-dom';
import Context from '../Context/Context';
import Item from './Item';
import Comments from './Comments';

const Posts = () => {
    const context = useContext(Context);
    const {list, getList} = context;
    const {path: p, params: {id}} = useRouteMatch();
    useEffect(() => {
        const path = p.slice(p.lastIndexOf('/'));
        getList(path, id);
        // eslint-disable-next-line
    }, [])
    return <ul className='posts'>
        {list.map(post => (
            <Item key={post.id}
                id={post.id}>

                <h3>Title: {post.title}</h3>
                <p>{post.body}</p>
                <h4 className='cursor-pointer'>
                    <Comments postId={post.id} />
                </h4>
            </Item>
        ))}
    </ul>
}

export default Posts;