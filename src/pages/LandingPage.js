import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

function LandingPage() {
    return (
        <>
            <div className='h-screen flex flex-col items-center justify-center bgHome'>
                <div className="px-10 py-10 rounded-3xl">
                    <h2 className='text-white font-thin text-5xl'>Welcome to </h2>
                    <h1 className='text-white font-semibold text-7xl'>Rotary Club of Bida Central</h1>
                    <p className='text-white italic font-extralight mt-2 text-5xl'>"Not just a club but a family"</p>
                    <div className='flex flex-row w-fit m-auto items-center justify-between mt-5'>
                        <Link className='text-white px-4 py-3 bg-amber-500 rounded-2xl hover:text-blue-900 duration-500 mx-5 font-semibold text-xl'>Our Projects</Link>
                        <Link to='/participate' className='text-white px-4 py-3 bg-amber-500 rounded-2xl hover:text-blue-900 duration-500 mx-5 font-semibold text-xl'>Participate</Link>
                    </div>
                </div>
            </div>
            <div className='h-fit flex items-center justify-center'>
                <div className=' w-3/4 h-96 my-12 bgAbout flex flex-col items-center justify-center rounded-xl'>
                    <h1 className='px-4 text-5xl text-white font-semibold uppercase'>Learn More About Rotary</h1>
                    <p className='text-white px-4 mt-3'>Take a good look at some basic things about Rotary</p>
                    <Link to='/about' className='text-white px-5 py-2 mt-6 border-white border-2 border-solid hover:text-black hover:bg-white duration-500'>About Us</Link>
                </div>
            </div>
            <div className='bgCatalogue flex flex-row items-center justify-end px-60'>
                <div className='h-fit w-1/2 text-white p-4 flex flex-col'>
                    <h1 className='text-left font-medium text-4xl'>Our Showcase</h1>
                    <p className='mt-5 text-left mb-7'>View a showcase of prestigeous projects View a catalogue of prestigeous projects View a catalogue of prestigeous projects View a catalogue of prestigeous projects View a catalogue of prestigeous projects View a catalogue of prestigeous projects View a catalogue of prestigeous projects View a catalogue of prestigeous projects View a catalogue of prestigeous projects</p>
                    <Link className='text-white px-5 py-2 border-white border-2 border-solid hover:text-black hover:bg-white duration-500 justify-start w-fit'>Showcase</Link>
                </div>
            </div>
            <div className='fiftyVH w-screen flex flex-row items-center justify-center'>
                <div className='w-2/3'>
                    <h1 className='text-blue-900 font-bold text-5xl'>Rotary is for everyone!</h1>
                    <div className='h-1 w-6/12 bg-amber-500 mt-2 mb-5 m-auto'></div>
                </div>
                <div className='text-left bg-cyan-200 w-1/3 h-full flex flex-col items-start justify-center px-5'>
                    <h1 className='text-3xl mb-5'>Join Or Participate</h1>
                    <p className='text-lg font-light'>You can join as a member of the club but you can also chose to participate in projects without being a member. Rotary is for everyone so click the link below to sign up.</p>
                    <Link to='/participate' className='text-black px-5 py-2 mt-6 border-black border-2 border-solid  hover:bg-black hover:text-cyan-200 duration-500'>Participate</Link>
                </div>
            </div>
        </>

    )
}

export default LandingPage
