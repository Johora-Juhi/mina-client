import React from 'react';
import { Button } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import './Banner.css'

const Banner = () => {
    return (
        <div className='background'>
            <Header></Header>
            <div className='image-container w-50 ms-auto'>
                <p className='fs-1 fw-lighter text-white mb-2'>Find and Book</p>
                <h1 className='fs-1 text-warning font fw-bold mb-0'>BEAUTY SERVICES</h1>
                <p className='fs-1 fw-lighter text-white mb-0'>ANYWHERE, ANYTIME</p>
                <Button variant="outline-light mt-5 px-5 py-2">Book A Service Now</Button>{' '}


            </div>
        </div>
    );
};

export default Banner;