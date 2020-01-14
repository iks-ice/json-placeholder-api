import React, {useState} from 'react';
import makeList from './makeList';
import Item from './Item';
import Comments from './Comments'

const Posts = props => {
    const {list} = props;
    const [selected, setSelected] = useState(undefined);

    const setId = id => setSelected(id);

    return (
        <ul className='posts'>
            {list.map(item => (
                <Item key={item.id}
                    id={item.id}
                    selected={selected}
                    setId={setId}>

                    <h3>Title: {item.title}</h3>
                    <p>{item.body}</p>
                    <h4 className='cursor-pointer'>
                        <Comments path={'/comments'} postId={item.id} />
                    </h4>
                </Item>
            ))}
        </ul>
    )

}

export default makeList(Posts);
