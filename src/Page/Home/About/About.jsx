import React from 'react';

import img1 from '../../../assets/proof-questions.svg'
import img2 from '../../../assets/proof-lessons.svg'
import img3 from '../../../assets/proof-videos.svg'

const About = () => {
    return (
        <div className='grid md:grid-cols-3 gap-20 md:mx-40 my-20'>

            <center>
                <img className='w-36 h-36' src={img1} alt="" />
                <h1 className='text-3xl font-bold my-5 text-[#886F79]'>400 million</h1>
                <p className='text-xl text-[#716F79]'>practice questions <br /> answered</p>
            </center>

            <center>
                <img className='w-36 h-36' src={img2} alt="" />
                <h1 className='text-3xl font-bold my-5 text-[#886F79]'>185</h1>
                <p className='text-xl text-[#716F79]'>countries with <br /> Magoosh students</p>
            </center>

            <center>
                <img className='w-36 h-36' src={img3} alt="" />
                <h1 className='text-3xl font-bold my-5 text-[#886F79]'>11 million</h1>
                <p className='text-xl text-[#716F79]'>hours of video lessons <br /> watched</p>
            </center>

        </div>
    );
};

export default About;