import React, {useContext} from 'react';
import Context from '../Context/Context';
import Spinner from '../Layout/Spinner';
import PropTypes from 'prop-types';


const Item = ({id, children}) => {
    const context = useContext(Context);
    const {setSelected, selected, loading} = context;
    const makeSelected = event => {
        event.stopPropagation();
        selected === id ?
            setSelected(undefined) :
            setSelected(id);
    };
    return loading ?
        <Spinner /> :
        <li className={selected === id ? 'selected' : ''} onClick={makeSelected}>
            {children}
        </li>

}

Item.propTypes = {
    id: PropTypes.number.isRequired,
}

export default Item;
