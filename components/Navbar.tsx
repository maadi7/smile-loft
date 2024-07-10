import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SmileLoftLogo from "../assets/Smile-Loft-logo black 1.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full z-10 top-0 sticky bg-white'>
      <h1 className='w-full flex justify-center sm:text-xl text-[14px] py-3 xs:p-2 bg-secondary'>
        Claim Your <span className='font-bold mx-1'> Free Exam & X-ray </span> Worth <span className='font-bold mx-1'> $250 </span> Today!
      </h1>
      <div className='flex justify-between items-center px-6 sm:px-16 py-6 xl:px-24 lg:px-12'>
        <div className='xl:w-[240px] sm:w-[210px] sm:h-[80px] w-[160px] h-[60px]'>
          <Image src={SmileLoftLogo} alt='smile-loft-dental' />
        </div>
        <ul className='justify-between text-xl items-center text-[#959090] hidden lg:flex'>
          <li className='xl:mx-4 mx-3'>Home</li>
          <li className='xl:mx-4 mx-3'>About us</li>
          <li className='xl:mx-4 mx-3'>Services</li>
          <li className='xl:mx-4 mx-3'>Contact us</li>
          <li className='xl:mx-4 mx-3'>Blogs</li>
        </ul>
        <button className='border-2 px-8 py-2 border-primary text-primary font-bold rounded-lg text-[18px] hidden lg:flex'>
          Book an appointment
        </button>
        <button className='lg:hidden' onClick={toggleMenu}>
          <svg className='w-8 h-8 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </button>
      </div>
      <div className={`bg-primary top-0 right-0 fixed w-full h-full z-30 flex flex-col items-start transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className='self-end mr-4 mt-4' onClick={toggleMenu}>
          <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
          </svg>
        </button>
        <ul className='justify-between flex text-xl pt-5 mx-5 items-start text-[#959090] flex-col'>
          <li className='my-4 hover:text-white cursor-pointer'>Home</li>
          <li className='my-4 hover:text-white cursor-pointer'>About us</li>
          <li className='my-4 hover:text-white cursor-pointer'>Services</li>
          <li className='my-4 hover:text-white cursor-pointer'>Contact us</li>
          <li className='my-4 hover:text-white cursor-pointer'>Blogs</li>
        </ul>
        <button className='border-2 w-[280px] px-8 py-2 border-white mt-4 mx-4 text-white font-bold rounded-lg text-[18px]'>
          Book an appointment
        </button>
      </div>
    </div>
  );
};

export default Navbar;
