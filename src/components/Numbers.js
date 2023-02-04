import React from 'react'

export default function Numbers() {
    return (
        <div className='bg-indigo-900 text-white p-20'>
            <h1 className='text-4xl  font-bold  text-center m-12'>Vi är bra på siffror</h1>
            <div className='flex flex-row justify-center mb-12'>
                <div>
                    <p className='text-7xl font-bold mx-8 text-center'>15</p>
                    <p className='mx-8 text-center'>År av erfarenhet</p>
                </div>
                <p className='text-6xl'>.</p>
                <div>
                    <p className='text-7xl font-bold mx-8 text-center'>36</p>
                    <p className='mx-8 text-center'>Kunniga experter</p>

                </div>
                <p className='text-6xl'>.</p>
                <div>
                    <p className='text-7xl font-bold mx-8 text-center'>120</p>
                    <p className='mx-8 text-center'>Kunder varje år</p>
                </div>
                <p className='text-6xl'>.</p>
                <div>
                    <p className='text-7xl font-bold mx-8 text-center'>9</p>
                    <p className='mx-8 text-center'>Partners glob.</p>
                </div>
            </div>
        </div>
    )
}
