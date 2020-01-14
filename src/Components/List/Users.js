import React, {Component} from 'react';
import makeList from './makeList';

class Users extends Component {
    render () {
        const {list} = this.props;
        return (
            <ul className='grid-3'>
                {list.map(item => (
                    <li className='card' key={item.id}>
                        <h3 className='text-center'>{item.name}</h3>
                        <h3 className='text-center'>{item.email}</h3>

                    </li>))}
            </ul>
        )
    }
}
export default makeList(Users);