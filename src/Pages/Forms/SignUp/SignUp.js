import React, { useState } from 'react';
import img from '../../../Assets/images/logo2.png';
import { Button, Form } from 'react-bootstrap';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    if (user) {
        navigate('/')
    }

    if (error) {
        toast(error?.message);
    }

    const handleEmail = event => {
        const emailRegex = /\S+@\S+\.\S+/;
        const verified = emailRegex.test(event.target.value);
        if (verified) {
            setEmail(event.target.value)
            setError('');
        }
        else {
            setError('Invalid email')
        }
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password)
        console.log('submit');
    }

    return (
        <div className='w-25 mx-auto'>
            <Form onSubmit={handleSubmit}>
                <img style={{ height: '45px' }} className='form-img' src={img} alt="" />
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Control type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <p className='text-danger text-center'>{error}</p>
                <Button variant="primary" className='w-100' type="submit">
                    Sign up
                </Button>
                <p className='form-text text-primary text-center mt-3'>Already have an account</p>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;