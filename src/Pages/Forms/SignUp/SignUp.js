import React from 'react';
import img from '../../../Assets/images/logo2.png';
import { Button, Form } from 'react-bootstrap';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='w-25 mx-auto'>
            <Form>
                <img style={{ height: '45px' }} className='form-img' src={img} alt="" />
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Button variant="primary" className='w-100' type="submit">
                    Submit
                </Button>
                <p className='form-text text-primary text-center mt-3'>Already have an account</p>
            </Form>
        </div>
    );
};

export default SignUp;