import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <article>
                <h1 className='text-center'>Best food waiting for your belly</h1>
                <div className="input-group mx-auto w-25">
                    <input type="text" className="form-control" placeholder="Search foods items" />
                    <button className="btn btn-primary" type="button">Button</button>
                </div>
            </article>
        </div>
    );
};

export default Banner;