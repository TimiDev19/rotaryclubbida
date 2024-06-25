// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Club  Logo png for digital and transparent background.png'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <nav className="fixed top-0 left-0 w-full z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src={Logo} className='mr-5 h-44 rounded-full align-middle' />
            </div>
            <div className="-mr-2 flex md:hidden">
              <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-blue-900 hover:text-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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
                <Link to='/' className='text-amber-500 duration-500 text-lg hover:text-xl'>Home</Link>
                <Link to='/about' className='text-amber-500 duration-500 text-lg hover:text-xl'>About</Link>
                <Link className='text-amber-500 duration-500 text-lg hover:text-xl' to='/newsletter'>Newsletter & Events</Link>
                <Link to='/contact' className='text-amber-500 duration-500 text-lg hover:text-xl'>Contact Us</Link>
                <Link className='text-amber-500 duration-500 text-lg hover:text-xl'>Showcase</Link>
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
      </nav> */}
      {/* <div className=' w-full bg-white fixed flex items-center justify-between px-4'>
        <img src={Logo} className=' w-[200px] md:w-[220px]' />
        <div className="-mr-2 flex md:hidden">
          <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-blue-900 hover:text-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <svg className="h-6 w-6 focus:outline-none" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4 text-sm">
            <Link to='/' className='text-amber-500 duration-500 text-lg hover:text-xl'>Home</Link>
            <Link to='/about' className='text-amber-500 duration-500 text-lg hover:text-xl'>About</Link>
            <Link className='text-amber-500 duration-500 text-lg hover:text-xl' to='/newsletter'>Newsletter & Events</Link>
            <Link to='/contact' className='text-amber-500 duration-500 text-lg hover:text-xl'>Contact</Link>
            <Link className='text-amber-500 duration-500 text-lg hover:text-xl'>Showcase</Link>
            <Link to="/participate" className="text-blue-900 font-semibold text-md px-8 py-2 mx-2 bg-blue-200 hover:bg-amber-500 duration-500 rounded-3xl">Participate</Link>
          </div>
        </div>
      </div> */}

      <div className=' w-full bg-white flex items-center justify-between py-5 px-4'>
        <img src={Logo} className='mr-5 w-[35%] sm:w-[20%]' />
        <div className=' md:hidden'>
          {
            isOpen ? (<div onClick={toggleMenu}><CloseOutlinedIcon className=' text-blue-900 cursor-pointer' /></div>) : (<div onClick={toggleMenu}><MenuOutlinedIcon className=' text-blue-900 cursor-pointer' /></div>)
          }
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4 ">
            <Link to='/' className='text-amber-500 duration-500 text-sm hover:text-base'>Home</Link>
            <Link to='/about' className='text-amber-500 duration-500 text-sm hover:text-base'>About</Link>
            <Link className='text-amber-500 duration-500 text-sm hover:text-base' to='/newsletter'>Newsletter & Events</Link>
            <Link to='/contact' className='text-amber-500 duration-500 text-sm hover:text-base'>Contact</Link>
            <Link className='text-amber-500 duration-500 text-sm hover:text-base'>Showcase</Link>
            <Link to="/participate" className="text-blue-900 font-semibold text-sm px-8 py-2 mx-2 bg-blue-200 hover:bg-amber-500 duration-500 rounded-3xl">Participate</Link>
          </div>
        </div>
      </div>
      {
        isOpen && <div className=' bg-white px-5 text-left'>
          <ul>
            <li className=' mb-4'><Link to='/' className=' mt-6 text-amber-500 hover:text-blue-900 duration-200'>Home</Link></li>
            <li className=' mb-4'><Link to='/about' className=' mt-6 text-amber-500 hover:text-blue-900 duration-200'>About</Link></li>
            <li className=' mb-4'><Link className=' mt-6 text-amber-500 hover:text-blue-900 duration-200' to='/newsletter'>Newsletter & Events</Link></li>
            <li className=' mb-4'><Link to='/contact' className=' mt-6 text-amber-500 hover:text-blue-900 duration-200'>Contact</Link></li>
            <li className=' mb-4'><Link className=' mt-6 text-amber-500 hover:text-blue-900 duration-200'>Showcase</Link></li>
            <li className=' mb-4'><Link to="/participate" className=' mt-6 text-amber-500 hover:text-blue-900 duration-200'>Participate</Link></li>
          </ul>
        </div>
      }
    </>
  );
};

export default Navbar;
