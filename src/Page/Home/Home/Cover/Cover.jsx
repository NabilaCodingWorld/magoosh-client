import React from 'react';
import cover from '../../../../assets/cheerful-playful-young-redhead-female-pajamas-lying-bed-her-room-with-feet-air-smiling-joyfully-while-flirting-with-her-boyfriend-sending-him-text-message-online-using-mobile-phone_344912-2191.jpg';

const Cover = () => {
  const gradient = {
    backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(133, 97, 182, 0.7),
        rgba(133, 97, 182, 0.7)
      ),
      url(${cover})
    `,
    width: '100%',
    height: '100vh',
  };

  return (
    <div>
      <div className="hero min-h-screen bg-fixed" style={gradient}>
        <div className='md:mx-20 mx-5'>
          <h1 className='md:text-6xl text-white my-20'>More than 6 Million Students Have Said Hello to Stress-Free Studying</h1>

          <p className='text-white md:text-xl font-bold'>Start preparing for your next test!</p>

          <div className='mt-6 grid md:grid-cols-6 grid-cols-3 gap-5 mx-2'>
            <div className='responsive-button'>
              <p className='text-white md:text-xl font-bold bg-[#26B67C] px-5 py-4 rounded-md text-center hover:bg-[#2AC787] duration-500'>GRE</p>
            </div>

            <div className='responsive-button'>
              <p className='text-white text-xl font-bold bg-[#26B67C] px-5 py-4 rounded-md text-center hover-bg-[#2AC787] duration-500'>GMAT</p>
            </div>

            <div className='responsive-button'>
              <p className='text-white text-xl font-bold bg-[#26B67C] px-5 py-4 rounded-md text-center hover-bg-[#2AC787] duration-500'>TOEFL</p>
            </div>

            <div className='responsive-button'>
              <p className='text-white text-xl font-bold bg-[#26B67C] px-5 py-4 rounded-md text-center hover-bg-[#2AC787] duration-500'>SAT</p>
            </div>

            <div className='responsive-button'>
              <p className='text-white text-xl font-bold bg-[#26B67C] px-5 py-4 rounded-md text-center hover-bg-[#2AC787] duration-500'>ACT</p>
            </div>

            <div className='responsive-button'>
              <p className='text-white text-xl font-bold bg-[#26B67C] px-5 py-4 rounded-md text-center hover-bg-[#2AC787] duration-500'>LSAT</p>
            </div>

            <div className='responsive-button'>
              <p className='text-white text-xl font-bold bg-[#26B67C] px-5 py-4 rounded-md text-center hover-bg-[#2AC787] duration-500'>MCAT</p>
            </div>

            <div className='responsive-button'>
              <p className='text-white md:text-xl md:font-bold bg-[#26B67C] px-5 py-4 rounded-md text-center hover-bg-[#2AC787] duration-500'>Admissions</p>
            </div>

            <div className='responsive-button'>
              <p className='text-white text-xl font-bold bg-[#26B67C] px-5 py-4 rounded-md text-center hover-bg-[#2AC787] duration-500'>IELTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
