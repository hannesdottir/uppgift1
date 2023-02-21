import React from 'react'

export default function CookieBar() {
    return (
        <div className='shadow-inner'>
            <div className='flex flex-row-reverse mr-4'>
                <button className='text-xl mt-4'>X</button>
            </div>
            <div className='flex flex-row text-sm px-20 pb-8 pt-4'>
                <p className='w-2/3'>Vi använder cookies för att underlätta våra webbplatsers funktion och
                    säkerhet och hjälpa oss ge dig bästa möjliga användarupplevelse. Genom att
                    klicka på Acceptera godkänner du att dessa cookies används för annonsering
                    och statistik. Du kan ändra dina inställningar för cookies när du vill. För
                    mer information, läs vår <span className='underline'>cookiepolicy.</span></p>
                <div className='ml-28'>
                    <button className='underline underline-offset-8'>Neka alla</button>
                    <button className='ml-8 rounded-3xl outline outline-1 px-4 py-2 hover:bg-zinc-500'>Avancerat</button>
                    <button className='ml-4 rounded-3xl bg-black text-white px-4 py-2 hover:bg-zinc-500'>Acceptera</button>
                </div>
            </div>

        </div>
    )
}
