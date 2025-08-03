import React from 'react'
import Button from '../atoms/Button'
import { ArrowRight } from 'lucide-react'
import Benefits from '../molecules/Benefits'
import OurTalent from '../molecules/OurTalent'

export default function WhyUs() {
    return (
        <section className='flex flex-col items-center p-40 py-20 w-full bg-background min-h-[600px] gap-14'>
            <div className='flex flex-col items-center gap-10'>
                <div className='relative inline-block'>

                    <h2 className='text-6xl font-semibold'>¿Por qué Oberstaff?</h2>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full h-4 bg-gradient-to-r from-pink-dark  via-pink-light to-purple-contrast " style={{
                        clipPath: 'polygon(2% 60%, 100% 30%, 98% 98%, 0% 100%)',
                    }} />

                </div>

                <p className='text-xl font-semibold text-center text-gray-500 max-w-3/4'>
                    <span className='text-pink-light'>  Miles de empresas </span> confían en nosotros para acceder a <span className='text-purple-contrast'> talento remoto </span> de clase mundial con máximo ahorro y flexibilidad
                </p>
            </div>

            <Benefits/>

            <OurTalent/>






            <Button type='active' className='!rounded-4xl font-bold text-xl hover:scale-110' >
                Descubre cómo podemos ayudarte
                <ArrowRight />
            </Button>



        </section>
    )
}
