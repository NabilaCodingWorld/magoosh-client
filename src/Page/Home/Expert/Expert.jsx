import React from 'react';
import image from '../../../assets/concentrated-colleagues-office-using-computer_171337-6844.avif'

import picture from '../../../assets/Cindy-Le.png'

const Expert = () => {

  const gradient = {
    backgroundImage: `
        linear-gradient(
          to bottom,
          rgba(133, 97, 182, 0.7), /* Adjust the opacity here (0.7 in this example) */
          rgba(133, 97, 182, 0.7)
        ),
        url(${image})
      `,
    width: '100%', // You can adjust the width and height as needed
    // height: '100vh',
    // Add any other CSS properties as necessary
  };

  return (
    <div>
      <div className="hero h-96 bg-fixed" style={gradient}>
        <div className='md:mx-20'>
          <h1 className='md:text-3xl text-white mb-10 font-bold'>Expert GRE instruction at a fraction of the price</h1>

          <center><button className='bg-[#26B67C] text-white md:text-xl md:font-bold md:px-5 py-3 rounded-sm hover:bg-[#2AC787] duration-300'> check out online classes </button></center>

        </div>
      </div>

      
      <div className='bg-[#26B67C] py-10'>
        <center className='flex justify-center items-center gap-5'>

          <div className='mx-auto max-w-7xl grid md:grid-cols-3 gap-10 justify-center items-center'>
            <div>
              <img className='h-36 w-36 rounded-full' src={picture} alt="" />
              <p className='text-xl text-white mt-2 font-bold'>Cindy L.</p>
            </div>
            <p className='text-xl text-white mx-5'>"Magoosh seemed to be by far the best option: a program I could use whenever I liked, following my own schedule."</p>

            <center>
              <button className='mt-10 text-xl font-bold text-[#26B67C] bg-white px-8 py-3 rounded-sm hover:bg-[#4D2079] hover:text-white duration-500'>student textimonial</button>
            </center>
          </div>

        </center>
      </div>
    </div>
  );
};

export default Expert;