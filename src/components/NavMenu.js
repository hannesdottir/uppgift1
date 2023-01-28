import React from 'react'



export default function Navmenu() {
    return (
        <div className='flex flex-row justify-between mx-10 my-5'>
            <h1 className="text-3xl font-bold">BizBud</h1>
            <ul className='flex flex-row m-1'>
                <li className='mx-5 text-purple-600'>Start</li>
                <li className='mx-5 hover:text-purple-600'>Tjänster</li>
                <li className='mx-5 hover:text-purple-600'>Om</li>
                <li className='mx-5 hover:text-purple-600'>Kundcitat</li>
                <li className='mx-5 hover:text-purple-600'>Kunder</li>
                <li className='mx-5 hover:text-purple-600'>Kontakt</li>
            </ul>
            <button className='bg-purple-600 text-white font-medium rounded-full px-10 py-3 hover:bg-violet-900'>Ring nu</button>
        </div>
    )
}
