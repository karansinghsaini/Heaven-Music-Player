import React from 'react';
import {Link,withRouter} from 'react-router-dom';

import '../App.css';


const Navbar = (props) => {

    return(
        <nav className='nav-wrapper grey darken-4'>
            <Link to='/' className='brand-logo left'>Heaven</Link>
            <ul className='right'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/artist'>Artist</Link></li>
                <li><Link to='/charts'>Charts</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
            <Link to='/signup' className='brand-logo right'>Signup</Link>
        </nav>
    )
}
export default withRouter (Navbar);
