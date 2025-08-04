import React from 'react'

export default function HeroStats() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center text-background text-center gap-4 sm:gap-6">
            <div className="flex flex-col w-28 sm:w-32">
                <p className="font-extrabold text-xl sm:text-2xl">70%</p>
                <p className="text-sm sm:text-md text-gray-300">Ahorro en costos</p>
            </div>
            <div className="hidden sm:block border-r-2 h-10 border-gray-300 opacity-60" />
            <div className="flex flex-col w-28 sm:w-32">
                <p className="font-extrabold text-xl sm:text-2xl">5000</p>
                <p className="text-sm sm:text-md text-gray-300">Empresas</p>
            </div>
            <div className="hidden sm:block border-r-2 h-10 border-gray-300 opacity-60" />
            <div className="flex flex-col w-28 sm:w-32">
                <p className="font-extrabold text-xl sm:text-2xl">15+</p>
                <p className="text-sm sm:text-md text-gray-300">Países</p>
            </div>
        </div>
    )
}
