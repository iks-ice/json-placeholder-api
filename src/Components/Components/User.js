import React, {useEffect, useState} from 'react';
import {Switch, Route, Link, useRouteMatch, useParams} from 'react-router-dom';
import axios from 'axios'
import Posts from './Posts';
import Albums from './Albums';
import Todos from './Todos';

const User = () => {
    const {id} = useParams();
    let {path, url} = useRouteMatch();
    const [user, setUser] = useState({
        address: {},
        company: {}
    });

    useEffect(() => {
        const getUser = async id => {
            let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            setUser(res.data);
        }
        getUser(id);
        // eslint-disable-next-line 
    }, []);

    const {name,
        username,
        address: {street, suite, city, zipcode},
        email,
        phone,
        website,
        company: {name: companyName}
    } = user;
    return (
        <div className="container">

            <Link to='/users' className='btn btn-light'>Back to users</Link>
            <div className="card bg-light">
                <div className="grid-2">
                    <div className='text-center'>
                        <p>NAME:</p>
                        <hr />
                        <p>{name}</p>
                        <hr />
                    </div>
                    <div className='text-center'>
                        <p>USERNAME:</p>
                        <hr />
                        <p>{username}</p>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="grid-2">
                <div className='card text-center bg-light'>
                    <p>CONTACTS:</p>
                    <hr />
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{website}</p>
                    <p>{companyName}</p>
                    <hr />
                </div>
                <div className='card text-center bg-light' >
                    <p>ADDRESS:</p>
                    <hr />
                    <address>
                        <p>{street}</p>
                        <p>{suite}</p>
                        <p>{city}</p>
                        <p>{zipcode}</p>
                    </address>
                    <hr />
                </div>
            </div>
            <div className='card bg-light'>
                <div className="grid-3">
                    <Link className="btn btn-success text-center" to={`${url}/posts`} style={white}>Posts</Link>
                    <Link className="btn btn-primary text-center" to={`${url}/albums`} style={white}>Albums</Link>
                    <Link className="btn btn-blue text-center" to={`${url}/todos`} style={white}>Todos</Link>
                </div>
            </div>
            <Switch>
                <Route exact path={`${path}/posts`} component={Posts} />
                <Route exact path={`${path}/albums`} component={Albums} />
                <Route exact path={`${path}/todos`} component={Todos} />
            </Switch>
        </div>
    )
}

const white = {color: 'white'};

export default User;
