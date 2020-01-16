import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
    <div className='all-center'>
        <img src={spinner} alt="Loading..." style={{width: '200px'}} />
    </div>
)

export default Spinner;