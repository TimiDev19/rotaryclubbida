import React from 'react'
import { Link } from 'react-router-dom'

function Participate() {
    return (
        <div className=''>
            <h1 className='text-blue-900 font-bold text-4xl uppercase py-20'>Participate in your own way</h1>
            <div className='bgJoin mt-4 my-20 mx-10 flex flex-col rounded-xl justify-center items-center'>
                <h1 className='text-white text-4xl uppercase font-semibold'>Join the club?</h1>
                <p className='w-1/2 text-white font-thin'>If you feel interested in a project and don't want to join the club or participate physically, a spnsorship for funding is also a very good way to help the society. Remember Rotary is about helping others...</p>
                <Link className='text-white px-5 py-2 border-white border-2 border-solid hover:text-black hover:bg-white duration-500 justify-start w-fit mt-3'>Participate</Link>
            </div>

            <div className='bgSponsor mt-4 flex flex-col justify-center items-center'>
                <h1 className='text-white text-4xl uppercase font-semibold'>Participate as a sponsor?</h1>
                <p className='w-1/2 text-white font-thin'>If you feel interested in a project and don't want to join the club or participate physically, a spnsorship for funding is also a very good way to help the society. Remember Rotary is about helping others...</p>
                <Link className='text-white px-5 py-2 border-white border-2 border-solid hover:text-black hover:bg-white duration-500 justify-start w-fit mt-3'>Participate</Link>
            </div>

            <div className='bgVolunteer mt-4 my-20 mx-10 flex flex-col rounded-xl justify-center items-center'>
                <h1 className='text-white text-4xl uppercase font-semibold'>Participate as a volunteer?</h1>
                <p className='w-1/2 text-white font-thin'>If you feel interested in a project and don't want to join the club or participate physically, a spnsorship for funding is also a very good way to help the society. Remember Rotary is about helping others...</p>
                <Link className='text-white px-5 py-2 border-white border-2 border-solid hover:text-black hover:bg-white duration-500 justify-start w-fit mt-3'>Participate</Link>
            </div>

            <div className='bgDonate flex flex-row items-center justify-end px-60'>
                <div className='h-fit w-3/4 text-white p-4 flex flex-col'>
                    <h1 className='text-white text-4xl uppercase font-semibold text-left'>Participate with a donation?</h1>
                    <p className='w-1/2 text-white font-thin text-left'>If you feel interested in a project and don't want to join the club or participate physically, a spnsorship for funding is also a very good way to help the society. Remember Rotary is about helping others...</p>
                    <Link className='text-white px-5 py-2 border-white border-2 border-solid hover:text-black hover:bg-white duration-500 justify-start w-fit mt-3'>Participate</Link>
                </div>
            </div>
        </div>
    )
}

export default Participate
