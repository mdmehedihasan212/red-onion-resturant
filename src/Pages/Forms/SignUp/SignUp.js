import React, { useEffect, useState } from 'react';
import img from '../../../Assets/images/logo2.png';
import { Button, Form } from 'react-bootstrap';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [error, setError] = useState("");
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        firebaseError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    if (user) {
        navigate('/')
    }

    // if (error) {
    //     toast(error?.message);
    // }

    // if (userInfo.password !== userInfo.confirmPassword) {
    //     setErrors("Password Do not match")
    // }

    const handleEmail = event => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value);
        if (validEmail) {
            // setEmail(event.target.value)
            // setError("");
            setUserInfo({ ...userInfo, email: event.target.value })
            setErrors({ ...errors, email: "" })
        }
        else {
            // setError('Invalid email')
            setErrors({ ...errors, email: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }
    const handlePassword = event => {
        const passwordRegex = /(?=.*[a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<< ]/;
        const validPassword = passwordRegex.test(event.target.value);
        if (validPassword) {
            // setPassword(event.target.value)
            // setError("")
            setUserInfo({ ...userInfo, password: event.target.value })
            setErrors({ ...errors, password: "" })
        }
        else {
            // setError('Please provide minimum one special character');
            setErrors({ ...errors, password: "Please provide minimum one special character" })
            setUserInfo({ ...userInfo, password: "" })
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        console.log('submit');
    }

    useEffect(() => {
        // if (firebaseError) {
        //     toast(firebaseError.message)
        // }
        switch (firebaseError?.code) {
            case "auth/invalid-email":
                toast("Please valid email");
                break;

            case "auth/invalid-password":
                toast("Please valid password");
                break;

            default:
                toast("Something went wrong")
        }
    }, [firebaseError])

    return (
        <div className='w-25 mx-auto'>
            <Form onSubmit={handleSubmit}>
                <img style={{ height: '45px' }} className='form-img' src={img} alt="" />
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={handleEmail} type="email" placeholder="Email" required />
                    {errors?.email && <p className='error-message'>{errors.email}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={handlePassword} type="password" placeholder="Password" required />
                    {errors?.password && <p className='error-message'>{errors.password}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Control type="password" placeholder="Confirm Password" required />
                </Form.Group>
                {/* {errors?.confirmPassword && <p>{errors.confirmPassword}</p>} */}
                {/* <p className='text-danger text-center'>{error}</p> */}
                <Button variant="primary" className='w-100' type="submit">
                    Sign up
                </Button>
                <Link to={'/login'} className='form-text text-primary text-center mt-3'>Already have an account</Link>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;