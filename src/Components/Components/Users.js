import React, {useContext, useEffect} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Context from '../Context/Context';
import User from './User';

export const Users = () => {
    const context = useContext(Context);
    const {users, setData} = context;
    useEffect(() => {
        setData('/users', 'GET_USERS');
        // eslint-disable-next-line
    }, [])
    return (
        <div className="flex jc-space-between">
            <ul className='users'>
                {users.map(user => (
                    <li className='card all-center' key={user.id}>
                        <Link className='' to={`/users/${user.id}`}>
                            <h3 className='text-center'>{user.name}</h3>
                        </Link>
                    </li>))
                }
            </ul >
            <section className='user'>
                <Switch>
                    <Route path='/users/:id' component={User} />
                </Switch>
            </section>
        </div>
    )
}

export default Users;