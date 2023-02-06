import React from 'react'
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa'
import ContactForm from './ContactForm'


export default function Contact() {
    return (
        <div className='bg-grid bg-slate-100 flex flex-row'>
            <div className='w-1/2 pt-24 ml-32 mb-72'>
                <p className='text-purple-600 font-bold tracking-widest mb-4'>KONTAKT</p>
                <p className='text-4xl font-bold mb-10 tracking-wide'>Låt oss samarbeta</p>
                <p className='font-light mb-2 tracking-wide text-lg'>Hamngatan 20, 111 47 Stockholm</p>
                <p className='font-light mb-2 tracking-wide text-lg'>info@minsida.com</p>
                <p className='font-light tracking-wide text-lg'>Tel: 08- 123 45 67</p>
                <div className='flex flex-row mt-12'>
                    <FaLinkedinIn className='mr-4' size={23} />
                    <FaFacebookF className='mr-6' size={21} />
                    <FaTwitter size={21} />
                </div>
            </div>
            <div className='w-1/2 ml-52'>
                <ContactForm />
            </div>
        </div>
    )
}
