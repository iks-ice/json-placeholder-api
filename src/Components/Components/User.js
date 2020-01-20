import React, {useEffect, useContext} from 'react';
import {Switch, Route, NavLink, useRouteMatch} from 'react-router-dom';
import axios from 'axios'
import Posts from './Posts';
import Albums from './Albums';
import Todos from './Todos';
import Context from '../Context/Context';
import Info from '../Layout/Info';

const User = () => {
    let {path, url, params: {id}} = useRouteMatch();
    const context = useContext(Context);
    const {user, setData, getList} = context;
    useEffect(() => {
        setData(url, 'GET_USER');
        getList('/posts', id, 'GET_POSTS');
        getList('/albums', id, 'GET_ALBUMS');
        getList('/todos', id, 'GET_TODOS');
        // eslint-disable-next-line 
    }, [id]);

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
                    <NavLink activeClassName="selectedLink" className="btn btn-success text-center br-5" to={`${url}/posts`} style={white}>Posts</NavLink>
                    <NavLink activeClassName="selectedLink" className="btn btn-primary text-center br-5" to={`${url}/albums`} style={white}>Albums</NavLink>
                    <NavLink activeClassName="selectedLink" className="btn btn-blue text-center br-5" to={`${url}/todos`} style={white}>Todos</NavLink>
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
