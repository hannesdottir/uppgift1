import React from 'react'
import companies from '../images/companies.png'

export default function CompanyMentions() {
    return (
        <div className='text-center bg-fuchsia-50 flex items-center flex-col py-12'>
            <h1 className='font-bold tracking-widest font-medium'>VÅRA NÖJDA KUNDER</h1>
            <img src={companies} className='w-4/5 pt-8' alt="companies"></img>
        </div>
    )
}
