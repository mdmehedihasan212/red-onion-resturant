import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import img from '../../../Assets/images/logo2.png';
import auth from '../../../firebase.init';
import SocialSignIn from '../../Shared/SocialSignIn/SocialSignIn';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/')
        toast(error?.message);
    }

    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log('submit');
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='w-25 mx-auto'>
            <Form onSubmit={handleSubmit}>
                <img style={{ height: '45px' }} className='form-img' src={img} alt="" />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" className='w-100' type="submit">
                    Login
                </Button>
                <p className='form-text text-center mt-3'>Don't have an account! <Link to={'/signup'}>Please register</Link></p>
            </Form>
            <SocialSignIn></SocialSignIn>
        </div>
    );
};

export default LogIn;