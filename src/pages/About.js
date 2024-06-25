import React from 'react'
import Gear from '../assets/gearlogo.png'
import { Link } from 'react-router-dom'
import transparentLogo from '../assets/plain-rotary.svg'

function About() {
    return (
        <div>
            <div className='md:p-20 py-7 px-4 bg-blue-900 h-fit md:fiftyVH flex flex-col items-center justify-center'>
                <h1 className='text-white font-semibold md:text-4xl uppercase'>About Rotary Club Of Bida Central</h1>
                <p className='text-white md:w-1/2 mb-4'>The club was chartered in 2004 and sits in Bida, an ancient town in the heart of Niger state, Nigeria. Every member of rotary club Bida is fully committed to helping people and we treat eachother as a family not just a club.</p>
                <p className='text-white md:w-1/2'>We meet <span className='text-amber-500'>every Tuesday at 18:30</span> in person at <span className='text-amber-500'>Taste Palace Hotel</span></p>
                <Link to='/participate' className='text-white px-5 py-2 border-white border-2 border-solid hover:text-black hover:bg-white duration-500 justify-start w-fit mt-3'>Participate</Link>
            </div>
            <div className='h-fit md:p-20 py-4 bg-blue-900 px-4'>
                <h1 className='text-amber-500 uppercase text-2xl md:text-4xl my-4 font-semibold'>A small insight to the world of rotary</h1>


                <div className='flex flex-col md:flex-row justify-between items-center w-full my-11'>
                    <div className='bg-white w-full md:w-5/12 p-8 rounded-2xl text-left mb-4'>
                        <h1 className='text-amber-500 font-bold uppercase text-2xl mb-1 flex items-start flex-col justify-start'><img src={transparentLogo} className='w-1/4 mr-3' />Vision statement</h1>
                        <p className='text-blue-900 text-lg font-semibold'>
                            Together we see a world where people unite and take action to create lasting change - across the globe, in our communities, and in ourselves.
                        </p>
                    </div>


                    <div className='bg-white w-full md:w-5/12 p-8 rounded-2xl text-left'>
                        <h1 className='text-amber-500 font-bold uppercase text-2xl mb-1 flex flex-col items-start justify-start'><img src={transparentLogo} className='w-1/4 mr-3' />core values</h1>
                        <p className='text-blue-900 text-lg font-semibold'>
                            Our core values are Service, Fellowship, Leadership, Integrity, Diversity
                        </p>
                    </div>
                </div>



                <div className='bg-white w-full md:w-3/5 m-auto p-8 rounded-2xl text-left'>
                    <h1 className='text-amber-500 font-bold uppercase text-2xl mb-1'>object of rotary</h1>
                    <p className='text-blue-900 mb-5 text-lg font-semibold'>
                        The Object of Rotary is to encourage and foster the ideal of service as a basis of worthy enterprise and, in particular, to encourage and foster:
                    </p>
                    <p className='font-semibold text-amber-500'><span className='text-blue-900 uppercase'>First: </span>The development of acquaintance as an opportunity for service</p>
                    <p className='font-semibold text-amber-500'><span className='text-blue-900 uppercase'>Second: </span>High ethical standards in business and professions; the recognition of the worthiness of all useful occupations; and the dignifying of each Rotarian’s occupation as an opportunity to serve society</p>
                    <p className='font-semibold text-amber-500'><span className='text-blue-900 uppercase'>Third: </span>The application of the ideal of service in each Rotarian’s personal, business, and community life</p>
                    <p className='font-semibold text-amber-500'><span className='text-blue-900 uppercase'>Fourth: </span>The advancement of international understanding, goodwill, and peace through a world fellowship of business and professional persons united in the ideal of service.</p>
                </div>



                {/* The  row side of the diamond */}
                <div className='flex flex-col md:flex-row justify-between items-center w-full my-11'>
                    

                    <div className='bg-white w-full md:w-2/5 p-8 rounded-2xl text-left mb-4'>
                        <h1 className='text-amber-500 font-bold uppercase text-2xl mb-1'>The four way test</h1>
                        <p className='text-blue-900 mb-5 text-lg font-semibold'>
                            The Four-Way Test is a nonpartisan and nonsectarian ethical guide for Rotarians to use for their personal and professional relationships. The test has been translated into more than 100 languages, and Rotarians recite it at club meetings:
                            Of the things we think, say or do
                        </p>
                        <p className='font-semibold text-amber-500'>Is it the TRUTH?</p>
                        <p className='font-semibold text-amber-500'>Is it FAIR to all concerned?</p>
                        <p className='font-semibold text-amber-500'>Will it build GOODWILL and BETTER FRIENDSHIPS?</p>
                        <p className='font-semibold text-amber-500'>Will it be BENEFICIAL to all concerned?</p>
                    </div>



                    <div className='bg-white w-full md:w-2/5 p-8 rounded-2xl text-left'>
                        <h1 className='text-amber-500 font-bold uppercase text-2xl mb-1'>Areas Of Focus</h1>
                        <p className='text-blue-900 mb-5 text-lg font-semibold'>We direct our efforts to enhance our local and global impact. Our most successful and sustainable projects and activities tend to fall within the following areas:</p>
                        <p className='font-semibold text-amber-500'>Promoting peace</p>
                        <p className='font-semibold text-amber-500'>Fighting Disease</p>
                        <p className='font-semibold text-amber-500'>Providing clean water</p>
                        <p className='font-semibold text-amber-500'>Saving mothers and children</p>
                        <p className='font-semibold text-amber-500'>Growing local economies</p>
                        <p className='font-semibold text-amber-500'>Protecting the environment</p>
                    </div>


                    {/* <div className='bg-blue-900 w-2/5 p-8 rounded-2xl text-left'>
                        <h1 className='text-amber-500 font-bold uppercase text-2xl mb-1'>core values</h1>
                        <p className='text-white'>
                            Our core values are Service, Fellowship, Leadership, Integrity, Diversity
                        </p>
                    </div> */}
                </div>



            </div>
            {/* <div className='bgFocus flex flex-col px-8 items-start justify-center'>
                <h1 className='text-white font-bold uppercase text-3xl'>Areas Of Focus</h1>
                <p className='text-white font-thin text-xl text-left'>We direct our efforts to enhance our local and global impact. Our most successful<br /> and sustainable projects and activities tend to fall within the following areas:</p>
                <p className='text-white mb-2'>Promoting peace</p>
                <p className='text-white mb-2'>Fighting Disease</p>
                <p className='text-white mb-2'>Providing clean water</p>
                <p className='text-white mb-2'>Saving mothers and children</p>
                <p className='text-white mb-2'>Growing local economies</p>
                <p className='text-white mb-2'>Protecting the environment</p>
            </div> */}
        </div>
    )
}

export default About
