import React from 'react'

export default function About() {
    return (
        <div className='flex flex-row flex1'>
            <div className='w-1/2 mt-20 mb-28 mx-20'>
                <p className='text-purple-600 font-bold tracking-widest m-6'>OM</p>
                <p className='text-4xl font-bold mx-6'>Våra experter</p>
                <p className='text-4xl font-bold mx-6 mt-2'>är de bästa</p>
                <p className='mx-6 mt-10 w-3/4 font-light tracking-widest leading-8'>
                    Ett stycke. Klicka här för att lägga till egen text. Klicka bara på ”Redigera text”
                    eller dubbelklicka för att lägga till eget innehåll och ändra typsnitt. Dra och
                    släpp för att flytta runt stycket på sidan. Här kan du berätta din historia och
                    låta dina användare lära känna dig.</p>
                <p className='mx-6 mt-10 w-3/4 font-light tracking-widest leading-8'>Här kan du skriva en längre text om ditt
                    företag och dina tjänster. Använd utrymmet för att gå på djupet, berätta om ditt
                    team och vilka tjänster du erbjuder. Använd gärna utrymmet för att berätta mer
                    fördjupat om ditt företag. Berätta om ditt team och vilka tjänster du erbjuder
                    och hur du kom på idén för ditt företag och vad som skiljer dig från dina konkurrenter.
                    Få ditt företag att sticka ut och visa vem du är.</p>
            </div>
            <div className='w-1/2 bg-gradient-to-r from-purple-300 to-white'>
                <p> </p>
            </div>
        </div>
    )
}
