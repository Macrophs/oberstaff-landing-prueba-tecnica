import React from 'react'
import { CountingNumber } from '../animate-ui/text/counting-number'
import { MotionEffect } from '../animate-ui/effects/motion-effect'

export default function HeroStats() {
    return (

        <MotionEffect
            fade
            blur="10px"
            transition={{
                duration: 0.5,
                ease: 'easeInOut',
            }}
            delay={0.7}
            inView
            className="flex flex-col sm:flex-row items-center justify-center text-background text-center gap-4 sm:gap-6"
        >
            <div className="flex flex-col w-28 sm:w-32">



                <div className="font-extrabold text-xl sm:text-2xl">
                    <CountingNumber fromNumber={10} transition={{ stiffness: 60, damping: 30 }} number={70} />%
                </div>
                <p className="text-sm sm:text-md text-gray-300">Ahorro en costos</p>

            </div>
            <div className="hidden sm:block border-r-2 h-10 border-gray-300 opacity-60" />
            <div className="flex flex-col w-28 sm:w-32">
                <div className="font-extrabold text-xl sm:text-2xl">
                    <CountingNumber fromNumber={4000} transition={{ stiffness: 60, damping: 20 }} number={5000} />
                </div>
                <p className="text-sm sm:text-md text-gray-300">Empresas</p>
            </div>
            <div className="hidden sm:block border-r-2 h-10 border-gray-300 opacity-60" />
            <div className="flex flex-col w-28 sm:w-32">
                <div className="font-extrabold text-xl sm:text-2xl">
                    <CountingNumber fromNumber={1} transition={{ stiffness: 35, damping: 25 }} number={15} />+
                </div>
                <p className="text-sm sm:text-md text-gray-300">Países</p>
            </div>
        </MotionEffect>

    )
}
