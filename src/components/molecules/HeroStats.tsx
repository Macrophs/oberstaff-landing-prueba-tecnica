import React from 'react'

export default function HeroStats() {
    return (
        <div className='flex text-background text-center gap-6'>
            <div className='flex flex-col w-32'>
                <p className='font-extrabold text-2xl'>
                    70%
                </p>
                <p className='text-md text-gray-300 '>
                    Ahorro en costos
                </p>
            </div>
            <div className='border-r-2 border-gray-300 opacity-60' />
            <div className='flex flex-col  w-32'>
                <p className='font-extrabold text-2xl'>
                    5000
                </p>
                <p className='text-md text-gray-300'>
                    Empresas
                </p>
            </div>
            <div className='border-r-2 border-gray-300 opacity-60' />
            <div className='flex flex-col  w-32'>
                <p className='font-extrabold text-2xl'>
                    15+
                </p>
                <p className='text-md text-gray-300'>
                    Países
                </p>
            </div>
        </div>
    )
}
