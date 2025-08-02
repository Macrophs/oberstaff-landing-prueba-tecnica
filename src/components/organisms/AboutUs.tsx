import React from 'react'

export default function AboutUs() {
    return (
        <section className='flex flex-col items-center p-10 py-20 w-full bg-background min-h-[600px] gap-10'>
            <div className='flex flex-col items-center gap-10'>
                <div className='relative inline-block'>

                    <h2 className='text-6xl font-semibold'>¿Qué Hacemos?</h2>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full h-4 bg-gradient-to-r from-pink-dark  via-pink-light to-pink-300 " style={{
                        clipPath: 'polygon(2% 60%, 100% 30%, 98% 98%, 0% 100%)',
                    }} />

                </div>

                <p className='text-xl text-center text-gray-500 max-w-3/4'>Conectamos empresas con talento profesional de alto nivel en Sudamérica, ofreciendo soluciones que benefician a ambas partes.</p>
            </div>

            <div>

                
            </div>

        </section>
    )
}
