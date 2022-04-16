// import React, { useState } from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../../Assets/images/social/google.png';
import facebook from '../../../Assets/images/social/facebook.png';
import github from '../../../Assets/images/social/github.png';

const SocialSignIn = () => {
    // const [error,setError]=useState("");
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    // if(error){
    // SpeechSynthesisErrorEvent()

    // }

    const GoogleSignIn = () => {
        signInWithGoogle();
    }

    const FacebookSignIN = () => {
        signInWithFacebook();
    }

    const GithubSignIn = () => {
        signInWithGithub();
    }
    return (
        <section>
            <article className='d-flex justify-content-center align-items-center'>
                <div className='border-top w-50'></div>
                <p className='mb-2 mx-2'>or</p>
                <div className='border-top w-50'></div>
            </article>
            <article>
                <div className='d-flex mt-3 justify-content-between'>
                    <p onClick={GoogleSignIn} className='btn btn-outline-primary w-25 mx-2'>
                        <img src={google} alt="google" />
                        Google</p>
                    <p onClick={FacebookSignIN} className='btn btn-outline-primary w-25 mx-2 px-0'>
                        <img src={facebook} alt="facebook" />
                        Facebook</p>
                    <p onClick={GithubSignIn} className='btn btn-outline-primary w-25 mx-2'>
                        <img src={github} alt="github" />
                        Github</p>
                </div>
            </article>
        </section>
    );
};

export default SocialSignIn;