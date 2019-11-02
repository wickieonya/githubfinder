import React from 'react';

const Navbar = ({title}) =>
    <nav className='navbar bg-primary'>
        <h1>
            <i className="fab fa-github"></i>
            {title}
        </h1>
    </nav>

export default Navbar
