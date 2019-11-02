import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = ({title}) =>
    <nav className='navbar bg-primary'>
        <h1>
            <i className="fab fa-github"></i>
            {title}
        </h1>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/users:username'>Profile</Link></li>
        </ul>
    </nav>

export default Navbar
