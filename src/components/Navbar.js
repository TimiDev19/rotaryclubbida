// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  Logo from '../assets/Club  Logo png for digital and transparent background.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={Logo} className='mr-5 h-36 rounded-full align-middle'/>
            {/* <Link to="/" className="text-blue-600 text-xl align-middle border-l-2 pl-4">RC Bida Central</Link> */}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to='/' className='text-amber-500 duration-500 hover:text-lg'>Home</Link>
              <Link to='/about' className='text-amber-500 duration-500 hover:text-lg'>About</Link>
              <Link className='text-amber-500 duration-500 hover:text-lg' to='/newsletter'>Newsletter & Events</Link>
              <Link to='/contact' className='text-amber-500 duration-500 hover:text-lg'>Contact Us</Link>
              <Link className='text-amber-500 duration-500 hover:text-lg'>Catalogue</Link>
              {/* <Link to="/" className="text-white font-semibold text-md px-8 py-2 mx-2 bg-blue-900 hover:bg-blue-700 duration-500  rounded-3xl">Donate</Link> */}
              <Link to="/participate" className="text-blue-900 font-semibold text-md px-8 py-2 mx-2 bg-blue-200 hover:bg-amber-500 duration-500 rounded-3xl">Participate</Link>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white hover:text-teal-900 block px-3 py-2 rounded-md text-base font-medium">Donate</Link>
            <Link to="/" className="text-white hover:text-teal-900 block px-3 py-2 rounded-md text-base font-medium">Participate</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
