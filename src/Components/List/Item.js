import React from 'react';

const Item = ({id, selected, children, setId}) => {

    const getId = event => {
        event.stopPropagation();
        selected === id ?
            setId(undefined) :
            setId(id);
    };
    return (
        <li className={selected === id ? 'selected' : ''} onClick={getId}>
            {children}
        </li>
    )
}

export default Item;
