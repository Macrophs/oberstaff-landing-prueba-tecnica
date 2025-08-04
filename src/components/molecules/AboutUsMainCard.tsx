import { ArrowRight, Briefcase, UsersRound } from 'lucide-react'
import React from 'react'
import { MotionEffect } from '../animate-ui/effects/motion-effect'

export default function AboutUsMainCard() {
    return (

        <MotionEffect
            fade
            blur="10px"
            transition={{
                duration: 1,
                ease: "circInOut",
            }}
            delay={0.2}
            className='flex flex-col lg:flex-row justify-center items-center w-full gap-10 lg:gap-20 px-2'
            inView
        >
            <div className='shadow-2xl rounded-4xl w-full lg:w-[45%] border-4 border-pink-dark/70 p-8 lg:p-10 flex flex-col gap-8 transition-all duration-500 transform hover:-translate-y-2'>
                <section className='flex gap-2'>
                    <div className='bg-gradient-to-r from-pink-dark to-pink-light rounded-2xl flex items-center justify-center p-2 px-3'>
                        <UsersRound className='text-white' size={32} />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-md lg:text-2xl font-bold text-gray-dark'>Talento Profesional</h3>
                        <p className='text-pink-dark font-bold'>100% Remoto</p>
                    </div>
                    <div className='ml-auto text-right hidden md:block'>
                        <h3 className='text-xl lg:text-2xl font-extrabold text-pink-dark'>70%</h3>
                        <p className='text-gray-500'>Menos Costo</p>
                    </div>
                </section>

                <section className='flex flex-col gap-4 mt-2'>
                    <div className='w-full bg-pink-light/10 p-4 rounded-2xl border-l-4 border-pink-dark'>
                        <h4 className='text-md font-semibold text-gray-dark'>Acceso Inmediato</h4>
                        <p className='text-gray-500 text-sm'>Talento altamente calificado en América Latina trabajando 100% remoto para tu empresa.</p>
                    </div>
                    <div className='w-full bg-purple-contrast/10 p-4 rounded-2xl border-l-4 border-purple-contrast'>
                        <h4 className='text-md font-semibold text-gray-dark'>Proceso Inmediato</h4>
                        <p className='text-gray-500 text-sm'>Nos encargamos de búsqueda, selección y contratación de profesionales comprometidos.</p>
                    </div>
                </section>

                <section className='flex justify-center w-full border-t border-gray-300/50 pt-4 mt-auto'>
                    <p className='text-pink-light text-center font-semibold text-sm'>Disponibilidad 24/7</p>
                </section>
            </div>


            <div className='shadow-2xl rounded-4xl w-full lg:w-[45%] p-8 lg:p-10 flex flex-col gap-8 bg-gradient-to-br from-blue-dark via-blue-dark/90 to-purple-contrast transition-all duration-500 transform hover:-translate-y-2'>
                <section className='flex gap-2'>
                    <div className='bg-gradient-to-r from-purple-contrast to-pink-light rounded-2xl flex items-center justify-center p-2 px-3'>
                        <UsersRound className='text-white' size={32} />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-md lg:text-2xl font-bold text-background'>Beneficio Mutuo</h3>
                        <p className='text-purple-contrast font-bold'>Win-Win Solution</p>
                    </div>
                </section>

                <section className='flex flex-col'>
                    <div className='w-full py-4 flex gap-4 items-center'>
                        <div className='bg-gray-500 rounded-2xl flex items-center justify-center p-2 px-3 h-14'>
                            <Briefcase className='text-white' size={32} />
                        </div>
                        <div className='flex flex-col'>
                            <h4 className='text-md font-semibold text-background'>Para tu empresa</h4>
                            <p className='text-gray-300 text-sm'>Ahorro significativo en costos operativos</p>
                        </div>
                        <div className='ml-auto text-right hidden md:block'>
                            <h3 className='text-xl font-extrabold text-pink-dark'>100%</h3>
                            <p className='text-gray-300 text-sm'>Beneficios</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-2'>
                        <div className="w-full h-1 bg-gradient-to-r from-pink-light via-pink-light to-pink-300" style={{
                            clipPath: 'polygon(2% 90%, 100% 90%, 98% 98%, 0% 100%)',
                        }} />
                        <div className='rounded-full bg-gradient-to-r from-purple-contrast to-pink-light text-background p-2'>
                            <ArrowRight size={16} />
                        </div>
                        <div className="w-full h-1 bg-gradient-to-r from-purple-contrast via-pink-light to-pink-300" style={{
                            clipPath: 'polygon(2% 90%, 100% 90%, 98% 98%, 0% 100%)',
                        }} />
                    </div>

                    <div className='w-full py-4 flex gap-4 items-center'>
                        <div className='bg-gray-500 rounded-2xl flex items-center justify-center p-2 px-3 h-14'>
                            <UsersRound className='text-white' size={32} />
                        </div>
                        <div className='flex flex-col'>
                            <h4 className='text-md font-semibold text-background'>Para el talento</h4>
                            <p className='text-gray-300 text-sm'>Salarios competitivos y mejor calidad de vida</p>
                        </div>
                        <div className='ml-auto text-right hidden md:block'>
                            <h3 className='text-xl font-extrabold text-purple-contrast'>+</h3>
                            <p className='text-gray-300 text-sm'>Ingresos</p>
                        </div>
                    </div>
                </section>

                <section className='flex justify-center w-full border-t border-gray-300/50 pt-4 mt-auto'>
                    <p className='text-purple-contrast text-center font-semibold text-sm'>Oportunidades globalmente</p>
                </section>
            </div>
        </MotionEffect>
    )
}
