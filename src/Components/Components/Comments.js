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
        const getComments = async () => {
            let commentsForPost = await getList('/comments', postId, 'GET_COMMENTS');
            setComments(commentsForPost);
        }
        getComments();
        // eslint-disable-next-line 
    }, [postId]);

    const open = e => {
        e.stopPropagation();
        setSelected(postId);
        setClosed(!closed);
    };
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
