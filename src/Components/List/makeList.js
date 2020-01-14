import React, {useState, useEffect} from 'react';
import axios from 'axios';

const makeList = Comp => props => {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com${props.match.url}`)
            .then(res => setList(res.data));
    }, []);

    return <Comp list={list} {...props} />

}

export default makeList;