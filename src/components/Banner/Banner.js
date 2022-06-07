import React from 'react';
import style from '../Banner/Banner.css'
import img from '../../images/tutor.jpg'
import bootstrap from 'bootstrap';
const Banner = () => {
    return (
        <div className='container'>
            <h1 className='heading fs-1'>Saad's <span>ICT and Physics Special Care</span></h1>
            <img className='img-fluid' src={img} alt="" />
            <h1 className='heading fs-1'>My <span>Special Courses </span></h1>

        </div>
    );
};

export default Banner;