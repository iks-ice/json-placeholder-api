import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';



const Navbar = ({titles}) => {
    return (
        <nav className='navbar bg-primary'>
            <ul>
                {titles.map((title, id) => <li key={id}>
                    <Link to={`/${title}`}><i className="far fa-address-card" />  {title.toUpperCase()}</Link>
                </li>)}
            </ul>
            <ul>
                <li><Link to='/'> <i className="fas fa-home" /></Link></li>
                <li><Link to='/about'>ABOUT</Link></li>
            </ul>
        </nav>
    )
}
Navbar.propTypes = {
    titles: PropTypes.array.isRequired,
}
export default Navbar;
