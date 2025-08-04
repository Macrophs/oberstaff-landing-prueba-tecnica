import React from 'react'
import Button from '../atoms/Button'
import { ArrowRight, ClockFading, Globe, ShieldCheck, User2 } from 'lucide-react'
import Benefits from '../molecules/Benefits'
import OurTalent from '../molecules/OurTalent'
import StatsCard from '../atoms/StatsCard'

export default function WhyUs() {
    return (
        <section id='why' className='flex flex-col items-center px-6 md:px-16 xl:px-40 py-20 w-full bg-background min-h-[600px] gap-14'>
            <div className='flex flex-col items-center gap-10'>
                <div className='relative inline-block text-center'>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold'>¿Por qué Oberstaff?</h2>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full h-4 bg-gradient-to-r from-pink-dark via-pink-light to-purple-contrast"
                        style={{
                            clipPath: 'polygon(2% 60%, 100% 30%, 98% 98%, 0% 100%)',
                        }}
                    />
                </div>

                <p className='text-lg md:text-xl font-semibold text-center text-gray-500 max-w-4xl'>
                    <span className='text-pink-light'>Miles de empresas</span> confían en nosotros para acceder a <span className='text-purple-contrast'>talento remoto</span> de clase mundial con máximo ahorro y flexibilidad
                </p>
            </div>

            <Benefits />
            <OurTalent />

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
                <StatsCard
                    title="Talento Evaluado"
                    description="Pruebas psicométricas y selección rigurosa"
                    fromColor="from-pink-dark"
                    toColor="to-pink-light"
                    icon={<User2 />}
                />
                <StatsCard
                    title="Misma Zona Horaria"
                    description="Integración perfecta con tu equipo"
                    fromColor="from-purple-contrast"
                    toColor="to-pink-light"
                    icon={<Globe />}
                />
                <StatsCard
                    title="Protección Total"
                    description="Sin riesgos laborales ni contractuales"
                    fromColor="from-blue-dark"
                    toColor="to-purple-contrast"
                    icon={<ShieldCheck />}
                />
                <StatsCard
                    title="Soporte 24/7"
                    description="Asistencia continua cuando la necesites"
                    fromColor="from-pink-light"
                    toColor="to-pink-dark"
                    icon={<ClockFading />}
                />
            </div>

            <div className="group relative w-full">
                <div className="bg-gradient-to-r from-pink-dark to-purple-contrast rounded-3xl p-1 shadow-2xl hover:shadow-pink-dark/25 transition-all duration-500 transform hover:-translate-y-2">
                    <div className="bg-white p-6 sm:p-10 flex flex-col items-center gap-6 rounded-3xl shadow-xl text-center">
                        <h2 className='font-bold text-2xl sm:text-4xl'>
                            Transforma tu Empresa Hoy
                        </h2>
                        <p className='text-gray-500 font-semibold text-base sm:text-xl max-w-xl'>
                            Únete a las <span className='text-pink-dark'>+5000 empresas</span> que ya están ahorrando hasta un <span className='text-purple-contrast'>70% en costos</span> con talento remoto de clase mundial
                        </p>
                        <Button type='active' className='!rounded-4xl font-bold text-base sm:text-xl hover:scale-110'>
                            Agenda Consulta Gratis
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
