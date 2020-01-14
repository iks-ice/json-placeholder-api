import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Item from './Item';
import CloseBtn from './CloseBtn';

const Comments = ({path, postId}) => {
    const [selected, setSelected] = useState(undefined);
    const [list, setList] = useState([]);
    const [closed, setClosed] = useState(true);

    useEffect(() => {
        const getComments = async () => {
            let res = await axios.get(`https://jsonplaceholder.typicode.com${path}`);
            const allComments = res.data;

            const commentsForPost = allComments.filter(comment => comment.postId === postId);
            setList(commentsForPost);
        }
        getComments();
    }, []);

    const setId = id => setSelected(id);

    const open = e => {
        e.stopPropagation();
        setSelected(postId);
        setClosed(!closed);
    };
    const comments = (
        <>
            {list.map(item => (
                <Item key={item.id}
                    id={item.id}
                    selected={selected}
                    setId={setId}>

                    <h3>Name: {item.name}</h3>
                    <p>{item.body}</p>
                </Item>
            ))}
            <CloseBtn close={open} />
        </>)
    return (
        <ul onClick={open}>
            {
                closed ?
                    <p>Comments: {list.length}</p> :
                    comments
            }
        </ul>
    )

}

export default Comments;
