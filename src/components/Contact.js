import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'


export default function Contact() {
    return (
        <div>
            <p className='text-purple-600 font-bold tracking-widest'>KONTAKT</p>
            <p className='text-4xl font-bold'>Låt oss samarbeta</p>
            <p className='font-light'>Hamngatan 20, 111 47 Stockholm</p>
            <p className='font-light'>info@minsida.com</p>
            <p className='font-light'>Tel: 08- 123 45 67</p>
            <FaLinkedinIn />
        </div>
    )
}
