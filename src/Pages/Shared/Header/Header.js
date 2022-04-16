import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/images/logo2.png';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <header className='d-flex px-5 mt-3 mb-2 justify-content-between align-items-center'>
            <div className="logo-section">
                <img src={logo} alt="" />
            </div>
            <nav className='navbar'>
                <Link to={'/'}>Home</Link>
                <Link to={'/cart'}>Cart</Link>
                {
                    !user ?
                        <div>
                            <Link to={'/login'}>Login</Link>
                            <Link className='btn btn-primary text-white rounded-pill px-4' to={'/signup'}>Sign up</Link>
                        </div>
                        :
                        <Link onClick={handleSignOut} to={'/login'}>Sign out</Link>
                }

            </nav>
        </header>
    );
};

export default Header;