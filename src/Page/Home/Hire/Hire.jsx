import React from 'react';
import pg from '../../../assets/business-professionals-talking-during-coffee-break-office-desk_662251-1580.jpg'

const Hire = () => {

    const gradient = {
        backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(133, 97, 182, 0.7), /* Adjust the opacity here (0.7 in this example) */
              rgba(133, 97, 182, 0.7)
            ),
            url(${pg})
          `,
        width: '100%', // You can adjust the width and height as needed
        // height: '100vh',
        // Add any other CSS properties as necessary
      };

    return (
        <div className="hero h-96 bg-fixed" style={gradient}>
        <div className='md:mx-20'>
          <h1 className='md:text-3xl mx-5 text-white my-10 font-bold md:w-[650px]'>We believe we can level the playing field by giving every student access to effective, affordable, and engaging test prep tools.</h1>

          <center><button className='bg-[#26B67C] text-white md:text-xl font-bold px-5 py-3 rounded-sm hover:bg-[#2AC787] duration-300 mb-10'> we are hireing  </button></center>

        </div>
      </div>
    );
};

export default Hire;