import React from 'react';
import footer from '../../../../assets/magoosh-logo.svg'
import img from '../../../../assets/owl-icon.png'

const Footer = () => {
    return (
        <div className=' p-10 bg-[#424240] text-white'>
            <img className='w-32 my-10' src={footer} alt="" />
            <footer className="footer">

                <nav>
                    <header className="footer-title text-[#2AC787] font-bold mb-2 text-xl">Our Products</header>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">GRE Prep</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">GMAT Prep</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">TOEFL Prep</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">SAT Prep</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">ACT Prep</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">Praxis Prep</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">LSAT Prep</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">MCAT Prep</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">IELTS Prep</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">High School Packages</a>

                </nav>

                <nav>
                    <header className="footer-title text-[#2AC787] font-bold mb-2 text-xl">Company</header>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">About Magoosh</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">Mission</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">Press</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">Contact</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">Privacy Policy</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">Affiliates and Group Partners</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">Student Beans Discount!</a>

                </nav>


                <nav>
                    <header className="footer-title text-[#2AC787] font-bold mb-2 text-xl">Our Blogs</header>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">
                        Company Blogs</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">GRE Blog</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">Grad Admissions Blog</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">TOEFL Blog</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">SAT Blog</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">ACT Blog</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">Praxis Blog</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">LSAT Blog</a>
                    <a className="link link-hover hover:translate-x-2 duration-700 text-xl">IELTS Blog</a>

                </nav>


                <nav>
                    <center>
                        <img src={img} alt="" />
                        <p className='text-xl font-bold mt-3 text-[#2AC787]'>Magoosh</p>
                    </center>

                </nav>
            </footer>


            <div className='flex gap-5 mt-20 text-sm'>
                <p>GMAT® is a registered trademark of the Graduate Management Admission Council (GMAC). This website is not endorsed or approved by GMAC. GRE®, TOEFL®, and Praxis® are registered trademarks of Educational Testing Service (ETS). This website is not endorsed or approved by ETS. SAT® is a registered trademark of the College Board, which was not involved in the production of, and does not endorse this product. LSAT® is a registered trademark of the Law School Admission Council, Inc. This website is not endorsed or approved by the LSAC. ACT® is a registered trademark of ACT, inc. This website is not endorsed or approved by ACT, inc. MCAT is a registered trademark of the Association of American Medical Colleges (AAMC). This website is not endorsed or approved by AAMC. <br /> <br />

                    View our <span className='text-[#2AC787] border-b-2 mb-1 border-[#2AC787]'>privacy policy</span>.</p>

                <p className='md:mr-20'>©Magoosh2023</p>
            </div>

        </div>
    );
};

export default Footer;