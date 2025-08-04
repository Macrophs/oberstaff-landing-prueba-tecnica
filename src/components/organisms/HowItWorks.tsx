import React from 'react'
import { ArrowRight, Quote, Star } from 'lucide-react'
import Button from '../atoms/Button'
import Stepper from '../molecules/Stepper'
import { TypingText } from '../animate-ui/text/typing'
import { WritingText } from '../animate-ui/text/writing'
import { MotionEffect } from '../animate-ui/effects/motion-effect'

export default function HowItWorks() {
    return (
        <section id='services' className='flex flex-col items-center px-4 lg:px-10 py-20 w-full bg-gradient-to-br from-blue-dark to-blue-dark/95 text-background gap-14'>

            <MotionEffect
                slide={{ direction: "up" }}
                fade
                blur="4px"
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                }}
                delay={0.5}
                className='flex flex-col items-center gap-10 text-center'
                inView>
                <div className='relative inline-block'>
                    <WritingText
                        inView
                        className='text-4xl sm:text-5xl lg:text-6xl font-semibold'
                        text="¿Como Funciona?"
                    />
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full h-4 bg-gradient-to-r from-pink-dark  via-pink-light to-pink-light/70" style={{
                        clipPath: 'polygon(2% 60%, 100% 30%, 98% 98%, 0% 100%)',
                    }} />
                </div>

                <p className='text-lg sm:text-xl text-gray-300 font-semibold max-w-3xl'>
                    Un proceso <span className='text-pink-light'>simple y efectivo</span> para incorporar talento de alto nivel a tu empresa
                </p>
            </MotionEffect>


            <Stepper />

            <MotionEffect
                zoom
                fade
                blur="10px"
                transition={{
                    duration: 1,
                    ease: "circInOut",
                }}
                delay={0.5}
                inView
            >
                <Button type='active' className='!rounded-4xl !px-8 !py-4 font-bold text-lg sm:text-2xl hover:scale-110'>
                    Programa una Llamada
                    <ArrowRight />
                </Button>
            </MotionEffect>

            <MotionEffect
                zoom
                fade
                blur="10px"
                transition={{
                    duration: 1,
                    ease: "circInOut",
                }}
                delay={0.5}
                inView
                className='w-full max-w-3xl bg-gray-dark/50 p-6 sm:p-8 rounded-xl border border-gray-700 flex flex-col items-center justify-center gap-4'
            >


                <div className='bg-gradient-to-r from-pink-dark via-pinklight to-purple-contrast rounded-full p-4 flex items-center h-16 w-16'>
                    <Quote className='text-white' size={32} />
                </div>

                <p className='font-semibold italic text-center text-lg sm:text-xl'>
                    &quot;Gracias a Oberstaff, hemos podido incorporar talento de primer nivel a nuestro equipo a un costo muy competitivo.
                    El proceso fue <span className='text-pink-dark'>rápido y sin complicaciones</span>.&quot;
                </p>

                <div className='flex items-center justify-center gap-4'>
                    <div className='bg-gradient-to-r from-pink-dark to-pink-light rounded-full hidden lg:flex justify-center items-center p-4 h-16 w-16'>
                        <p className='font-bold text-xl'>FC</p>
                    </div>
                    <div className='flex flex-col text-center sm:text-left'>
                        <p className='text-lg sm:text-xl font-black'>Fernando Calderon</p>
                        <p className='text-purple-contrast text-sm sm:text-base'>CEO de www.bybeautypro.com</p>
                    </div>
                </div>

                <div className='flex gap-2 text-pink-light'>
                    <Star className='fill-current' />
                    <Star className='fill-current' />
                    <Star className='fill-current' />
                    <Star className='fill-current' />
                    <Star className='fill-current' />
                </div>

            </MotionEffect>
        </section>
    )
}
