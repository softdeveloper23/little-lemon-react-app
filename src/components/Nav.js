import React from 'react';
import logo from '../images/Logo .svg'
const Nav = () => {
    return (
        <nav>
            <a href='/' />
            <img src={logo} alt='Little Lemon logo' />

            {/* Mobile nav bar */}
            <div>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
        </nav>
    );
};

export default Nav;