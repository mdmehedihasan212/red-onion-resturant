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
    const [showPassword, setShowPassword] = useState(false);

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


    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [])

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
            setErrors({ ...errors, password: "Please give minimum one special character" })
            setUserInfo({ ...userInfo, password: "" })
        }
    }

    const handleConfirmPassword = event => {

        if (event.target.value === userInfo.password) {
            // setPassword(event.target.value)
            // setError("")
            setUserInfo({ ...userInfo, confirmPassword: event.target.value })
            setErrors({ ...errors, confirmPassword: "" })
        }
        else {
            // setError('Please provide minimum one special character');
            setErrors({ ...errors, confirmPassword: "Password doesn't matched" })
            setUserInfo({ ...userInfo, confirmPassword: "" })
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
            // toast("Something went wrong")
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

                    <div className='password-field'>
                        <Form.Control onChange={handlePassword} type={showPassword ? "text" : "password"} placeholder="Password" required />
                        <p onClick={() => setShowPassword(!showPassword)} className='password-simble'>X</p>
                    </div>

                    {errors?.password && <p className='error-message'>{errors.password}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Control onChange={handleConfirmPassword} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                {errors?.confirmPassword && <p className='error-message'>{errors.confirmPassword}</p>}
                {/* <p className='text-danger text-center'>{error}</p> */}
                <Button variant="primary" className='w-100' type="submit">
                    Sign up
                </Button>
                <p className='form-text text-center mt-3'>Already have an account! <Link to={'/login'}>Please Login</Link></p>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;