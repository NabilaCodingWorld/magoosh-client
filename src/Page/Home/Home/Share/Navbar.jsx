import React from 'react';
import logo from '../../../../assets/magoosh-logo.svg'

const Navbar = () => {

    const navShare = <>
        <li><a className='text-xl font-bold hover:text-[#2AC787] duration-500'>team</a></li>
        
        <li><a className='text-xl font-bold hover:text-[#2AC787] duration-500'>careers</a></li>
        
        <li><a className='text-xl font-bold hover:text-[#2AC787] duration-500'>testimonials</a></li>
        
        <li><a className='text-xl font-bold hover:text-[#2AC787] duration-500'>blogs</a></li>

        <li><a className='text-xl font-bold hover:text-[#2AC787] duration-500'>press</a></li>

        <li><a className='text-xl font-bold hover:text-[#2AC787] duration-500'>contact</a></li>

    </>

    return (
        <div>
            <div className="navbar bg-[#85618E] bg-opacity-60 text-xl text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#85618E] rounded-box w-52">
                            {navShare}
                        </ul>
                    </div>
                    <a><img className='md:ml-10 w-40' src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navShare}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;