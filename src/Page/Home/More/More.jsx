import React from 'react';

import icon1 from '../../../assets/product-web.svg'
import icon2 from '../../../assets/product-mobile.svg'
import icon3 from '../../../assets/web-clock.svg'
import icon4 from '../../../assets/mobile-flashcards11.svg'
import icon5 from '../../../assets/web-play.svg'
import icon6 from '../../../assets/mobile-math1.svg'
import icon7 from '../../../assets/web-chart.svg'
import icon8 from '../../../assets/mobile-opponent.svg'
import icon9 from '../../../assets/web-callout.svg'
import icon10 from '../../../assets/mobile-star.svg'

const More = () => {
    return (
        <div className='md:mx-40 my-40 mx-5'>

            <div className='grid grid-cols-2 gap-20'>

                <div className='grid md:grid-cols-2 gap-2 justify-center items-center'>
                    <img className='h-40 w-40' src={icon1} alt="" />

                    <div>
                        <h1 className='text-3xl font-bold mb-5 text-[#4D2079]'>Web</h1>
                        <p className='text-xl text-[#4D2079] font-bold'>Prep anytime from your desktop with our self-study platform</p>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-2 justify-center items-center'>
                    <img className='h-40 w-40' src={icon2} alt="" />

                    <div>
                        <h1 className='text-3xl font-bold mb-5 text-[#4D2079]'>Mobile</h1>
                        <p className='text-xl text-[#4D2079] font-bold'>Study on-the-go with our free mobile apps</p>
                    </div>
                </div>

            </div> <br /> <br />


            <div className='grid grid-cols-2 gap-20 my-10'>

                <div className='grid md:grid-cols-2 gap-2 justify-center items-center'>
                    <img className='w-20 h-20' src={icon3} alt="" />

                    <div>

                        <p className='text-xl text-[#716F79]'>Prep anytime from your desktop with our self-study platform</p>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-2 justify-center items-center'>
                    <img className='w-20 h-20' src={icon4} alt="" />

                    <div>

                        <p className='text-xl text-[#716F79]'>Study on-the-go with our free mobile apps</p>
                    </div>
                </div>

            </div>

            <div className='grid grid-cols-2 gap-20 my-10'>

                <div className='grid md:grid-cols-2 gap-2 justify-center items-center'>
                    <img className='w-20 h-20' src={icon5} alt="" />

                    <div>

                        <p className='text-xl text-[#716F79]'>Video lessons taught by experts</p>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-2 justify-center items-center'>
                    <img className='w-20 h-20' src={icon6} alt="" />

                    <div>

                        <p className='text-xl text-[#716F79]'>
                            Vocab flashcards</p>
                    </div>
                </div>

            </div>


            <div className='grid grid-cols-2 gap-20 my-10'>

                <div className='grid md:grid-cols-2 gap-2 justify-center items-center'>
                    <img className='w-20 h-20' src={icon7} alt="" />

                    <div>

                        <p className='text-xl text-[#716F79]'>Track your progress</p>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-2 justify-center items-center'>
                    <img className='w-20 h-20' src={icon8} alt="" />

                    <div>

                        <p className='text-xl text-[#716F79]'>

                            Play an opponent</p>
                    </div>
                </div>

            </div>


            <div className='grid grid-cols-2 gap-20 my-10'>

                <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                    <img className='w-20 h-20' src={icon9} alt="" />

                    <div>

                        <p className='text-xl text-[#716F79]'>	
Friendly support team</p>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                    <img className='w-20 h-20' src={icon10} alt="" />

                    <div>

                        <p className='text-xl text-[#716F79]'>5-star ratings</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default More;