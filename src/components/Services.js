import React from 'react'
import df from '../images/df.png'

export default function Services() {
    return (
        <div className='flex flex-col text-center my-20'>
            <div className='flex flex-col text-center'>
                <p className='text-purple-600 font-bold text-xl mb-6'>TJÄNSTER</p>
                <p className='text-4xl font-bold mb-2'>Tar ditt företag</p>
                <p className='text-4xl font-bold'>till nästa nivå</p>
            </div>
            <div className='flex flex-row justify-center'>
                <div className='m-20'>
                    <img src={df} style={{ maxWidth: '170px' }} className='inline mb-6' />
                    <p className='font-bold text-center'>Affärsplaner</p>
                    <p>Ett stycke, klicka här för att lägga</p>
                    <p>till egen text.</p>
                </div>
                <div className='m-20'>
                    <img src={df} style={{ maxWidth: '170px' }} className='inline mb-6' />
                    <p className='font-bold text-center'>Redovisningstjänster</p>
                    <p>Ett stycke, klicka här för att lägga</p>
                    <p>till egen text.</p>
                </div>
                <div className='m-20'>
                    <img src={df} style={{ maxWidth: '170px' }} className='inline mb-6' />
                    <p className='font-bold text-center'>Förbättrade finanser</p>
                    <p>Ett stycke, klicka här för att lägga</p>
                    <p>till egen text.</p>
                </div>
            </div>
        </div>
    )
}
