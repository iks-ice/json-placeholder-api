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
        <div className="flex jc-space-between">
            <ul className=''>
                {users.map(user => (
                    <li className='all-center' key={user.id}>
                        <Link className='' to={`/users/${user.id}`}>
                            <h3 className='text-center'>{user.name}</h3>
                        </Link>
                    </li>))
                }
            </ul >
        </div>
    )
}

export default Users;