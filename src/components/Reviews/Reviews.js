import React from 'react';
import img from '../../images/learner.jpg'

const Reviews = () => {
    return (
        <div>
            <h1 className='heading fs-1'>My<span>Learners Opinion </span></h1>
            <div className='container'>
                <p>Hello ,I am an active learner of Saad Sir. I Take the special ICT and Physics course from him and the learning system of him is very much attractive to me .</p>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Reviews;