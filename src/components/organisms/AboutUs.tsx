import React from 'react'
import AboutUsMainCard from '../molecules/AboutUsMainCard'
import { ArrowRight, CircleDollarSign, Search, UsersRound } from 'lucide-react'
import AboutUsSecondaryCard from '../molecules/AboutUsSecondaryCard'
import Button from '../atoms/Button'
import { MotionEffect } from '../animate-ui/effects/motion-effect'
import { WritingText } from '../animate-ui/text/writing'

export default function AboutUs() {
    return (
        <section id='about' className='flex flex-col items-center px-4 sm:px-6 lg:px-10 py-20 w-full bg-background min-h-[600px] gap-14 mt-10'>
            <MotionEffect
                slide={{ direction: "up" }}
                fade
                blur="4px"
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                }}
                delay={0.2}
                className='flex flex-col items-center gap-6 sm:gap-10'
                inView>

                <div className='relative inline-block text-center'>
                    <WritingText
                        inView
                        className='text-3xl sm:text-5xl lg:text-6xl font-semibold'
                        text="¿Qué Hacemos?"
                    />
                    <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-full h-3 sm:h-4 bg-gradient-to-r from-pink-dark  via-pink-light to-pink-300" style={{
                        clipPath: 'polygon(2% 60%, 100% 30%, 98% 98%, 0% 100%)',
                    }} />
                </div>

                <p className='text-base sm:text-lg lg:text-xl text-center text-gray-500 max-w-[90%] sm:max-w-3xl font-semibold'>
                    Conectamos empresas con talento profesional de alto nivel en Sudamérica, ofreciendo soluciones que benefician a ambas partes.
                </p>

            </MotionEffect>

            <AboutUsMainCard />


            <MotionEffect
                slide={{ direction: "down" }}
                fade
                blur="6px"
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
                delay={0.2}
                className='flex flex-col md:flex-row w-full justify-center gap-6 md:gap-10'
                inView
            >




                <AboutUsSecondaryCard
                    title='Búsqueda y Selección'
                    text='Simplificamos todo el proceso de encontrar el talento ideal para tu empresa, ahorrándote tiempo y recursos.'
                    icon={<Search className='text-white' size={32} />}
                    variant='pink'
                />

                <AboutUsSecondaryCard
                    title='Profesionales Comprometidos'
                    text='Contratamos expertos motivados y dedicados a impulsar tu negocio con sus habilidades y conocimientos.'
                    icon={<UsersRound className='text-white' size={32} />}
                    variant='purple'
                />

                <AboutUsSecondaryCard
                    title='Ahorro Significativo'
                    text='Ahorra hasta un 70% en costos de personal mientras ofreces salarios competitivos a profesionales talentosos.'
                    icon={<CircleDollarSign className='text-white' size={32} />}
                    variant='purple-dark'
                />

            </MotionEffect>


            <MotionEffect
                slide={{ direction: "down" }}
                fade
                blur="6px"
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
                delay={0.2}
                inView
            >
                <Button type='active' className='!rounded-4xl font-bold text-base sm:text-lg lg:text-xl hover:scale-110'>
                    Descubre cómo podemos ayudarte
                    <ArrowRight />
                </Button>
            </MotionEffect>
        </section >
    )
}
