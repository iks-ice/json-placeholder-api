import React, {useState, useEffect, useContext} from 'react';
import Item from './Item';
import CloseBtn from './CloseBtn';
import Context from '../Context/Context';
import axios from 'axios'

const Comments = ({postId}) => {
    const context = useContext(Context);
    const {selected, setSelected} = context;
    const [closed, setClosed] = useState(true);
    const [list, setList] = useState([]);

    useEffect(() => {
        const getComments = async postId => {
            let res = await axios.get('https://jsonplaceholder.typicode.com/comments');
            setList(res.data.filter(comment => comment.postId === postId));
        }
        getComments(postId);
        // eslint-disable-next-line 
    }, []);

    const open = e => {
        e.stopPropagation();
        setSelected(postId);
        setClosed(!closed);
    };
    const commentsBlock = (
        <>
            {list.map(item => (
                <Item key={item.id}
                    id={item.id}
                    selected={selected}>

                    <h3>Name: {item.name}</h3>
                    <p>{item.body}</p>
                    <p>CommentID: {item.id}</p>
                </Item>
            ))}
            <CloseBtn close={open} />
        </>)
    return (
        <ul onClick={open}>
            {
                closed ?
                    <p>Comments: {list.length}</p> :
                    commentsBlock
            }
        </ul>
    )

}

export default Comments;
