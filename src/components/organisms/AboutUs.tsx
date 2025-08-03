import React from 'react'
import AboutUsMainCard from '../molecules/AboutUsMainCard'
import { ArrowRight, Search } from 'lucide-react'
import AboutUsSecondaryCard from '../molecules/AboutUsSecondaryCard'
import Button from '../atoms/Button'

export default function AboutUs() {
    return (
        <section className='flex flex-col items-center p-10 py-20 w-full bg-background min-h-[600px] gap-14'>
            <div className='flex flex-col items-center gap-10'>
                <div className='relative inline-block'>

                    <h2 className='text-6xl font-semibold'>¿Qué Hacemos?</h2>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full h-4 bg-gradient-to-r from-pink-dark  via-pink-light to-pink-300 " style={{
                        clipPath: 'polygon(2% 60%, 100% 30%, 98% 98%, 0% 100%)',
                    }} />

                </div>

                <p className='text-xl text-center text-gray-500 max-w-3/4  font-semibold'>Conectamos empresas con talento profesional de alto nivel en Sudamérica, ofreciendo soluciones que benefician a ambas partes.</p>
            </div>



            <AboutUsMainCard />


            <section className='flex  w-full justify-center gap-10'>

                <AboutUsSecondaryCard
                    title='Búsqueda y Selección'
                    text='Simplificamos todo el proceso de encontrar el talento ideal para tu empresa, ahorrándote tiempo y recursos.'
                    icon={<Search className='text-white' size={32} />}
                    variant='pink'
                />

                <AboutUsSecondaryCard
                    title='Profesionales Comprometidos'
                    text='Contratamos expertos motivados y dedicados a impulsar tu negocio con sus habilidades y conocimientos.'
                    icon={<Search className='text-white' size={32} />}
                    variant='purple'
                />

                <AboutUsSecondaryCard
                    title='Ahorro Significativo'
                    text='Ahorra hasta un 70% en costos de personal mientras ofreces salarios competitivos a profesionales talentosos.'
                    icon={<Search className='text-white' size={32} />}
                    variant='purple-dark'
                />

            </section>


            <Button type='active' className='!rounded-4xl font-bold text-xl hover:scale-110' >
                Descubre cómo podemos ayudarte
                <ArrowRight />
            </Button>



        </section>
    )
}
