import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Context from '../Context/Context';

export const Users = () => {
    const context = useContext(Context);
    const {users, getUsers} = context;
    useEffect(() => {
        getUsers();
        // eslint-disable-next-line
    }, [])
    return (
        <div className="container">
            <ul className='grid-3'>
                {users.map(user => (
                    <li className='card' key={user.id}>
                        <h3 className='text-center'>{user.name}</h3>
                        <div className='all-center'>
                            <Link className='btn btn-dark m-1' to={`/users/${user.id}`}>More</Link>
                        </div>
                    </li>))
                }
            </ul >
        </div>
    )
}

export default Users;