// import React, { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../../Assets/images/social/google.png';
import facebook from '../../../Assets/images/social/facebook.png';
import github from '../../../Assets/images/social/github.png';

const SocialSignIn = () => {
    // const [error,setError]=useState("");
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // if(error){
    // SpeechSynthesisErrorEvent()

    // }

    const GoogleSignIn = () => {
        signInWithGoogle();
    }

    const FacebookSignIN = () => {
    }

    const GithubSignIn = () => {
    }
    return (
        <section>
            <article className='d-flex justify-content-center align-items-center'>
                <div className='border-top w-50'></div>
                <p className='mb-2 mx-2'>or</p>
                <div className='border-top w-50'></div>
            </article>
            <article>
                <div className='mt-3'>
                    <p onClick={GoogleSignIn} className='btn btn-primary w-25 mx-2'>
                        <img src={google} alt="google" />
                        Google Sign in</p>
                    <p onClick={FacebookSignIN} className='btn btn-primary w-25 mx-2'>
                        <img src={facebook} alt="facebook" />
                        Facebook Sign in</p>
                    <p onClick={GithubSignIn} className='btn btn-primary w-25 mx-2'>
                        <img src={github} alt="github" />
                        Github Sign in</p>
                </div>
            </article>
        </section>
    );
};

export default SocialSignIn;