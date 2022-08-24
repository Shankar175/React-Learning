import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMobileSize, setIsMobileSize] = useState(false);
    return (
    <>
        <nav className='navbar'>
            <h3 className='logo'>Logo</h3>
            <ul className= { isMobileSize ? 'nav-links-mobile' : 'nav-links' } onClick = { () => setIsMobileSize(false) } >
                <Link to='/' className='home'>
                    <li>Home</li>
                </Link>
                <Link to='/about' className='about'>
                    <li>About</li>
                </Link>
                <Link to='/products' className='products'>
                    <li>Products</li>
                </Link>
                <Link to='/services' className='services'>
                    <li>Services</li>
                </Link>
                <Link to='/contact' className='contact'>
                    <li>Contact</li>
                </Link>
                <Link to='/signup' className='signup'>
                    <li>Sign Up</li>
                </Link>
            </ul>
            <button className='mobile-menu-icon' onClick={() => setIsMobileSize(!isMobileSize) }>
                { isMobileSize ? (<i className='fas fa-times'></i>) : (<i className='fas fa-bars'></i>) }
            </button>
        </nav>
    </>
    )
}

export default Navbar