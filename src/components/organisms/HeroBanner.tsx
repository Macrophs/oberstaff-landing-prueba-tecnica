import React from 'react'
import Button from '../atoms/Button'
import { ArrowBigRightDash, Globe, User2 } from 'lucide-react'
import HeroStats from '../molecules/HeroStats'
import FloatingCardHero from '../atoms/FloatingCardHero'

export default function HeroBanner() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/*Background Image*/}
            <div className="absolute inset-0">
                <img
                    src="/images/internacional imagen.jpg"
                    alt="Equipo remoto trabajando"
                    className="object-cover"
                />
                {/*Dark Overlay with Gradient*/}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-dark/90 via-blue-dark/70 to-gray-dark/80"></div>
                {/*Additional Color Overlay*/}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-dark/20 via-transparent to-purple-contrast/20"></div>
            </div>

            {/*Blur background effects */}
            <div className="absolute inset-0 z-10">
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-purple-contrast/10 rounded-full blur-3xl animate-float"
                ></div>
                <div
                    className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-light/10 rounded-full blur-3xl animate-float"
                ></div>
            </div>

            {/*Information Section*/}
            <div className="container mx-auto px-4 relative z-20">

                <div className='flex flex-col items-center gap-10'>
                    <div className='text-center'>
                        <h1 className='text-7xl text-background font-bold'>
                            Contrata diferente
                        </h1>
                        <h1 className='text-7xl mt-2 text-transparent font-bold bg-clip-text bg-gradient-to-r from-pink-light via-100% to-purple-contrast'>
                            Crece sin límites
                        </h1>
                    </div>

                    <p className='text-gray-200 text-xl font-semibold text-center max-w-[52%] '>
                        Accede a profesionales que trabajen en remoto para tu empresa y <span className='text-pink-light'>ahorra hasta un 70%</span> en comparación con la contratación tradicional.
                    </p>
                    <div className='text-xl'>
                        <Button type='default' className='!rounded-4xl px-6 py-3 hover:scale-110'>
                            Agendar Llamada Gratis
                            <ArrowBigRightDash />
                        </Button>
                    </div>
                    <HeroStats />
                </div>

            </div>

            {/*HeroBanner Floating Cards Section*/}
            <div className="absolute inset-0 z-30 pointer-events-none">
                <div
                    className="absolute top-1/4 left-8 md:left-1/7 pointer-events-auto group"
                >
                    <FloatingCardHero
                        titleTop="Talento"
                        titleBottom="Latino"
                        subtitle="24/7 Disponible"
                        icon={<User2 className="text-white" />}
                        position="right-left"
                    />
                </div>
                <div
                    className="absolute top-3/5 right-8 md:right-1/7 pointer-events-auto group"
                >
                    <FloatingCardHero
                        titleTop="Empresas"
                        titleBottom="Internacionales"
                        subtitle="ahorra hasta 70%"
                        icon={<Globe className="text-white" />}
                        position="left-right"
                    />
                </div>

            </div>

        </section>
    )
}
