import React from 'react'

const CloseBtn = ({close}) => {
    const closeHandler = e => {
        close(e);
    }
    return <button className='btn btn-dark' onClick={closeHandler}>Close</button>
}
export default CloseBtn;
