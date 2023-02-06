import React from 'react'

export default function ContactForm() {
    return (
        <div>
            <form className='w-3/4 mt-36'>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block tracking-wide text-gray-700 text-sm mb-2">
                            Förnamn
                        </label>
                        <input class="focus:outline-purple-600 block w-full bg-slate-100 border-b border-black py-2 px-4 leading-tight" />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block tracking-wide text-gray-700 text-sm mb-2">
                            Efternamn
                        </label>
                        <input class="focus:outline-purple-600 block w-full bg-slate-100 border-b border-black py-2 px-4 leading-tight" />
                    </div>
                    <div class="w-full px-3 mt-8 mb-2">
                        <label class="block tracking-wide text-gray-700 text-sm">
                            E-post*
                        </label>
                        <input class="focus:outline-purple-600 block w-full bg-slate-100 border-b border-black py-2 px-4 leading-tight" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block tracking-wide text-gray-700 text-sm ">
                            Lämna ett meddelande
                        </label>
                        <input class="h-20 focus:outline-purple-600 block w-full bg-slate-100  border-b border-black py-2 px-4 leading-tight mb-6" />
                    </div>
                </div>
                <button className='bg-purple-600 text-white font-medium rounded-full px-10 py-3 hover:bg-violet-900 font-light '>Skicka</button>
            </form>
        </div>
    )
}
