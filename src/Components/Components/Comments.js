import React, {useState, useEffect, useContext} from 'react';
import Item from './Item';
import CloseBtn from './CloseBtn';
import Context from '../Context/Context';

const Comments = ({postId}) => {
    const context = useContext(Context);
    const {selected, setSelected, getList} = context;
    const [closed, setClosed] = useState(true);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getList('/comments', postId, 'GET_COMMENTS');

        // eslint-disable-next-line 
    }, []);

    const open = e => {
        e.stopPropagation();
        setSelected(postId);
        setClosed(!closed);
    };
    const formatEmail = email => {
        const name = email.indexOf('@');
        return name;
    }
    const commentsBlock = (
        <>
            {comments.map(comment => (
                <Item key={comment.id}
                    id={comment.id}
                    selected={selected}>

                    <h3>{comment.email}:   {comment.name}</h3>
                    <p>{comment.body}</p>
                    <p>{comment.id}</p>
                </Item>
            ))}
            <CloseBtn close={open} />
        </>)
    return (
        <ul className='comments' onClick={open}>
            {
                closed ?
                    <p>Comments: {comments.length}</p> :
                    commentsBlock
            }
        </ul>
    )

}

export default Comments;
