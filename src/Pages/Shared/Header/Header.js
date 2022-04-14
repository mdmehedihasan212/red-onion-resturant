import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/images/logo2.png';
import './Header.css';

const Header = () => {
    return (
        <header className='d-flex px-5 mt-3 mb-2 justify-content-between align-items-center'>
            <div className="logo-section">
                <img src={logo} alt="" />
            </div>
            <nav className='navbar'>
                <Link to={'/'}>Cart</Link>
                <Link to={'/login'}>Login</Link>
                <Link className='btn btn-primary text-white rounded-pill px-4' to={'/signup'}>Sign up</Link>
            </nav>
        </header>
    );
};

export default Header;