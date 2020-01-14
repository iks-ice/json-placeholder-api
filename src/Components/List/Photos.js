import React, {Component} from 'react';
import makeList from './makeList';

class Photos extends Component {
    render () {
        const {list} = this.props;
        return (
            <ul>
                {list.map(item => <li key={item.id}>{item.id}</li>)}
            </ul>
        )
    }
}
export default makeList(Photos);