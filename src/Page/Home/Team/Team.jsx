import React from 'react';
import { FaBeer, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

import img1 from '../../../assets/instagram-1.jpg'
import img2 from '../../../assets/instagram-2.jpg'
import img3 from '../../../assets/instagram-3.jpg'
import img4 from '../../../assets/instagram-4.jpg'
import img5 from '../../../assets/instagram-5.jpg'
import img6 from '../../../assets/instagram-6.jpg'
import img7 from '../../../assets/instagram-7.jpg'
import img8 from '../../../assets/instagram-8.jpg'
import img9 from '../../../assets/instagram-9.jpg'
import img10 from '../../../assets/instagram-10.jpg'
import img11 from '../../../assets/instagram-11.jpg'
import img12 from '../../../assets/instagram-12.jpg'

const Team = () => {
    return (
        <div>
            <div className='md:mx-20 mx-5 mt-20'>
                <div className='grid md:grid-cols-6 grid-cols-3 gap-2'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                </div> <br />

                <p className='text-center my-20 md:text-xl font-bold text-[#4D2079]'>Our small team of education fanatics is on a mission to make test prep <br /> better.</p>

                <div className='grid md:grid-cols-6  grid-cols-3 gap-2'>
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                    <img src={img9} alt="" />
                    <img src={img10} alt="" />
                    <img src={img11} alt="" />
                    <img src={img12} alt="" />
                </div>

                <center><button className='my-20  bg-[#26B67C] text-white md:text-xl font-bold px-5 py-3 rounded-sm hover:bg-[#2AC787] duration-300'> meet our team </button></center>
            </div>


            <div className='bg-[#26B67C] py-16'>
                <center className='flex justify-center items-center gap-2 md:gap-5'>

                    <p className='md:text-4xl text-white'>Connect with us</p>
                        <FaTwitter className='h-8 w-8 text-white hover:text-purple-800 duration-500'></FaTwitter>

                        <FaFacebook className='h-8 w-8 text-white hover:text-purple-800 duration-500'></FaFacebook>

                        <FaLinkedin className='h-8 w-8 text-white hover:text-purple-800 duration-500'></FaLinkedin>

                        <FaYoutube className='h-8 w-8 text-white hover:text-purple-800 duration-500'></FaYoutube>

                        <FaInstagram className='h-8 w-8 text-white hover:text-purple-800 duration-500'></FaInstagram>

                </center>
            </div>

        </div>
    );
};

export default Team;