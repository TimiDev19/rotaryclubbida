import React from 'react'

function Contact() {
    return (
        <div>
            <div className='h-screen bg-white py-24 flex flex-row items-center justify-center'>
                <div className='w-1/2 text-left px-5'>
                    <h1 className='text-blue-900 font-bold text-6xl'>Contact Us</h1>
                    <p className='text-blue-900 font-thin text-lg'>Reach out to us, you don't have to be a member to participate. Rotary accepts anyone willing to help the world and selflessly serve humanity</p>
                    <p className="mb-4 flex items-center justify-center md:justify-start text-blue-900 mt-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-3 h-5 w-5">
                            <path
                                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path
                                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                        rcbidacentral@gmail.com
                    </p>
                    <p className="mb-4 flex items-center justify-center md:justify-start text-blue-900 mt-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-3 h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                clipRule="evenodd" />
                        </svg>
                        + 234 806 862 3066
                    </p>
                </div>
                <form className='w-1/2 p-6'>
                    <div className='bg-blue-900 h-fit p-6 rounded-2xl'>
                        <h1 className='text-white font-bold text-4xl my-4 text-left'>We would love to hear from you</h1>
                        <div className='grid grid-cols-2 w-full items-center justify-between'>
                            <input type='text' className='text-blue-900 w-4/5 h-8 focus:outline-none px-3 mb-12 placeholder:text-blue-900' placeholder='First Name' />
                            <input type='text' className='text-blue-900 w-full h-8 focus:outline-none px-3 mb-12 placeholder:text-blue-900' placeholder='Last Name' />
                            <input type='text' className='text-blue-900 w-4/5 h-8 focus:outline-none px-3 mb-12 placeholder:text-blue-900' placeholder='Phone number' />
                            <input type='email' className='text-blue-900 w-full h-8 focus:outline-none px-3 mb-12 placeholder:text-blue-900' placeholder='Email' />
                            <select className='text-blue-900 w-4/5 h-8 focus:outline-none px-3 mb-12 placeholder:text-blue-900'>
                                <option>Why are you reaching out?</option>
                                <option>Join the club</option>
                                <option>Make a donation</option>
                                <option>Partner with your club</option>
                            </select>
                            <input type='email' className='text-blue-900 w-full h-8 focus:outline-none px-3 mb-12 placeholder:text-blue-900' placeholder='Company name (optional)' />
                        </div>
                        <textarea className='mt-4 w-full cursor-text px-3 py-3 placeholder:text-blue-900 focus:outline-none text-blue-900' placeholder='Enter a message' rows={5}></textarea>
                        <input type='submit' className='mt-3 text-white border-2 border-white py-1 px-4 hover:cursor-pointer hover:text-blue-900 hover:bg-white duration-500' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
