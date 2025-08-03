import React from 'react'
import { ArrowRight, Quote, Star } from 'lucide-react'
import Button from '../atoms/Button'
import Stepper from '../molecules/Stepper'

export default function HowItWorks() {
    return (
        <section className='flex flex-col items-center p-10 py-20 w-full bg-gradient-to-br from-blue-dark to-blue-dark/95 text-background min-h-[600px] gap-14'>
            <div className='flex flex-col items-center gap-10'>
                <div className='relative inline-block'>

                    <h2 className='text-6xl font-semibold'>¿Como Funciona?</h2>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full h-4 bg-gradient-to-r from-pink-dark  via-pink-light to-pink-light/70 " style={{
                        clipPath: 'polygon(2% 60%, 100% 30%, 98% 98%, 0% 100%)',
                    }} />

                </div>

                <p className='text-xl text-center text-gray-300 font-semibold '>Un proceso <span className='text-pink-light'>simple y efectivo</span> para incorporar talento de alto nivel a tu empresa</p>
            </div>

            <Stepper />

            <Button type='active' className='!rounded-4xl !px-8 !py-4 font-bold text-2xl hover:scale-110' >
                Programa una Llamada
                <ArrowRight />
            </Button>


            <div className=' bg-gray-dark/50 p-8 rounded-xl border border-gray-700 flex flex-col items-center justify-center gap-4 w-1/2'>

                <div className='bg-gradient-to-r from-pink-dark via-pinklight to-purple-contrast rounded-full p-4 flex items-center h-16 w-16'>
                    <Quote className='text-white' size={32} />
                </div>

                <p className='font-semibold italic text-center text-2xl'>
                    "Gracias a Oberstaff, hemos podido incorporar talento de primer nivel a nuestro equipo a un costo muy competitivo.
                    El proceso fue <span className='text-pink-dark'>rápido y sin complicaciones</span>."
                </p>

                <div className='flex items-center justify-center gap-4'>
                    <div className='bg-gradient-to-r from-pink-dark to-pink-light rounded-full flex justify-center items-center p-4 h-16 w-16'>

                        <p className='font-bold text-xl'>
                            FC
                        </p>

                    </div>

                    <div className='flex flex-col'>
                        <p className='text-xl font-black'>Fernando Calderon</p>
                        <p className='text-purple-contrast'>CEO de www.bybeautypro.com</p>
                    </div>
                </div>

                <div className='flex gap-2 text-pink-light'>
                    <Star className='fill-current' />
                    <Star className='fill-current' />
                    <Star className='fill-current' />
                    <Star className='fill-current' />
                    <Star className='fill-current' />
                </div>

            </div>


        </section>
    )
}
